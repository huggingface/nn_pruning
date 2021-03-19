.PHONY style test

# Run code quality checks
style:
	black .
	isort .

# Run tests for the library
test:
	python -m pytest nn_pruning