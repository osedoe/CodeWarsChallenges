# Python test suite

For running our test in Python we'll use *pytest*.

A few things to take into consideration:

- Python files and functions are written in snake_case.

- We need to create the `__init__.py` file at the package level otherwise it won't let us do relative imports

- Test files are written as `test_<dummy>.py`.

- Assertions are reached through the syntax:

```
def test_method_name:
    assert <module>.<function> == <result>
```

- If we have a few cases is good to wrap them in a class 

- Run the tests through `py.test` in the command line
