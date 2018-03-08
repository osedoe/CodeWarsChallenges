# Basic Setup

```javascript
describe("Example Tests", function() {
  it("Example Test Case", function() {
    Test.assertEquals(add(1, 1), 2, "optional message");
  });
});
```

## Assertions

TODO Improve descriptions while keeping them simple.

```javascript
Test.assertEquals(actual, expected[, msg])
```

Checks that the actual value equals (===) the expected value.

```javascript
Test.assertNotEquals(actual, unexpected[, msg])
```

Checks that the actual value does not equal (!==) the unexpected value.

```javascript
Test.assertSimilar(actual, expected[, msg])
```

Checks that the actual value equals (===) the expected value.

Test.inspect is used to wrap the values being tested, allowing for similar values to be considered the same.

```javascript
Test.assertNotSimilar(actual, unexpected[, msg])
```

Checks that the actual value does not equal (!==) the unexpected value.

Test.inspect is used to wrap the values being tested, allowing for similar values to be considered the same.

```javascript
Test.assertDeepEquals(actual, expected[, msg])
```

Checks that the actual value equals the expected value by performing deep comparison.

Unlike Test.assertSimilar, values are not turned into strings.

```javascript
Test.assertNotDeepEquals(actual, unexpected[, msg])
```

Checks that the actual value does not equal the unexpected value by performing deep comparison.

Unlike Test.assertNotSimilar, values are not turned into strings.

```javascript
Test.assertApproxEquals(actual, expected[, msg])
```

Compares two floating point values and checks whether they are approximately equal to each other.

```javascript
Test.assertNotApproxEquals(actual, expected[, msg])
```

Compares two floating point values and checks whether they are sufficiently different from each other.

```javascript
Test.assertContains(actual, expected[, msg])
```

Checks that the actual value contains the expected element.

```javascript
Test.assertNotContains(actual, unexpected[, msg])
```

Checks that the actual value does not contain the unexpected element.

```javascript
Test.expectError([msg, ]fn)
```

Checks that fn throws.

```javascript
Test.expectNoError([msg, ]fn)
```

Checks that fn does not throw.

```javascript
Test.expect(passed[, msg])
```

Core assertion method testing if passed is truthy.

## Utilities

```javascript
Test.inspect(object)
```

Returns a string representation of the object.

```javascript
Test.randomize(array)
```

Returns a shuffled array.

```javascript
Test.randomNumber()
```

Returns a random integer.

```javascript
Test.randomToken()
```

Returns a random string of characters.

```javascript
Test.sample(array)
```

Returns a single, randomly chosen item from an array.