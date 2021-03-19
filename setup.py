from setuptools import setup


def readme():
    with open("README.md") as f:
        return f.read()

extras = {}
extras["examples"] = ["numpy>=1.2.0", "datasets>=1.4.1", "ipywidgets>=7.6.3", "matplotlib>=3.3.4", "pandas>=1.2.3"]

setup(
    name="nn_pruning",
    version="0.1",
    description="nn_pruning is a Python package for pruning Transformers",
    long_description=readme(),
    classifiers=[
        "Development Status :: 3 - Alpha",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3.0",
        "Topic :: Text Processing",
    ],
    keywords="",
    url="",
    author="",
    author_email="",
    license="MIT",
    packages=["nn_pruning"],
    install_requires=["click", "transformers>=4.3.0", "torch>=1.6", "scikit-learn>=0.24"],
    extras_require=extras,
    test_suite="nose.collector",
    tests_require=["nose", "nose-cover3"],
    entry_points={
        "console_scripts": ["nn_pruning_run=nn_pruning.command_line:main"],
    },
    include_package_data=True,
    zip_safe=False,
)
