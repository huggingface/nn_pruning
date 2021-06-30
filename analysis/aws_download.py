import boto3
import math
import os
import time
from pathlib import Path
import sh
import shutil
import sys

def s3_get_meta_data(conn, bucket, key):
    meta_data = conn.head_object(Bucket=bucket, Key=key)
    return meta_data

def s3_download(conn, bucket, key, dest_file_name, parallel_threads=10):
    start = time.time()
    print(f"Downloading {key} to {dest_file_name}")
    md = s3_get_meta_data(conn, bucket, key)
    print("metadata", md)
    conn.download_file(
        Bucket=bucket,
        Filename=str(dest_file_name),
        Key=key,
        Config=boto3.s3.transfer.TransferConfig(
            max_concurrency=parallel_threads
        )
    )
    end = time.time() - start
    print("Finished downloading %s in %s seconds" % (key, end))


import os
from contextlib import contextmanager


@contextmanager
def working_directory(directory):
    owd = os.getcwd()
    try:
        os.chdir(directory)
        yield directory
    finally:
        os.chdir(owd)


class AWSExperienceDownloader:
    def __init__(self, sagemaker_bucket, tmp_directory, dest):
        self.sagemaker_bucket = sagemaker_bucket
        self.tmp_dir = Path(tmp_directory).resolve()
        self.dest = Path(dest).resolve()
        self.s3client = boto3.client('s3')

    def load_single(self, xp_name):
        key = xp_name + "/output/model.tar.gz"
        dest_file_name = self.tmp_dir / xp_name / (xp_name + "_output.tgz")
        dest_dir = dest_file_name.parent
        final_dest_file = self.dest / ("aws_" + dest_dir.name)
        if final_dest_file.exists() and False:
            print("ALREADY PROCESSED", final_dest_file)
            # Nothing to do
            return
        print("PROCESSING", key)
        dest_dir.mkdir(parents=True, exist_ok=True)

        if not dest_file_name.exists():
            try:
                print(dest_file_name)
                s3_download(self.s3client, self.sagemaker_bucket, key, dest_file_name)
            except self.s3client.exceptions.ClientError as e:
                return None
        else:
            print("File was already downloaded to %s" % dest_file_name)

        print("Unpacking")
        with working_directory(dest_dir):
            sh.tar("-zxvf", dest_file_name.name)

            to_remove = []
            to_remove_local = []

            for root, dirs, files in os.walk(".", topdown=False):
                for name in files:
                    # Mark optimizer files for deletion
                    if name == "optimizer.pt":
                        to_remove += [Path(root) / name]

        print("Cleaning up")
        # Remove the unwanted files
        for f in to_remove:
            print("remove", f)
            (dest_dir / f).unlink()

        # Remove the tar.gz
        dest_file_name.unlink()

        sh.aws("s3", "sync", str(dest_dir),  "s3://lagunas-sparsity-experiments/backup/nn_pruning/output/squad_test_aws/" + xp_name, _out=sys.stdout, _err = sys.stderr)

        for f in to_remove_local:
            print("remove local", f)
            (dest_dir / f).unlink()

        print("Copying to final destination")
        shutil.copytree(dest_dir, final_dest_file, dirs_exist_ok=True)

        print("Removing temporary dir")
        shutil.rmtree(self.tmp_dir)

        # Special stuff : add link to compensate for bug
        for link_name in ["pytorch_model.bin", "training_args.bin", "vocab.txt", "tokenizer_config.json",
                          "special_tokens_map.json"]:
            link = final_dest_file / "checkpoint-110660" / link_name
            if not link.exists():
                link.symlink_to(final_dest_file / link_name)

    def load(self, pattern):
        dirs = self.s3client.list_objects_v2(Bucket=self.sagemaker_bucket, Delimiter='/')

        for d in dirs["CommonPrefixes"]:
            if pattern in d["Prefix"]:
                self.load_single(d["Prefix"][:-1])

