.PHONY:	style test

# Run code quality checks
style:
	black .
	isort .

# Run tests for the library
test:
	python -m pytest nn_pruning

build_dist:
	rm -fr build
	rm -fr dist
	python -m build

pypi_upload: build_dist
	python -m twine upload dist/*
