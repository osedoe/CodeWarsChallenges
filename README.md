# Collection of Code Wars Challenges

Key points:

- All challenges are solved using either Typescript or Python.
- The readme.md inside each directory should display the problem.
- Challenges beginning with an underscore are not solved yet, but may contain written tests or pseudo-code.

## Basic Test Setup

### TS

We are going to be using Jest to test the different katas.
From there, we can choose to use assert, expect or should.
As for now, I will be using mostly assert since it's the only one I'm familiar with.

```javascript
describe('Title', function() {
    describe('general description', function() {
        it('specific test description', function () {
            // Code
        });
    });
});
```

### Python

[TODO]

## Assert

The assert style is exposed through assert interface. This provides the classic assert-dot notation, similar to that packaged with node.js. This assert module, however, provides several additional tests and is browser compatible.

```javascript
var assert = require('chai').assert
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

assert.typeOf(foo, 'string'); // without optional message
assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
assert.equal(foo, 'bar', 'foo equal `bar`');
assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
```

In all cases, the assert style allows you to include an optional message as the last parameter in the assert statement. These will be included in the error messages should your assertion not pass.

## BDD

The BDD style comes in two flavors: expect and should. Both use the same chainable language to construct assertions, but they differ in the way an assertion is initially constructed. In the case of should, there are also some caveats and additional tools to overcome the caveats.

### Expect

The BDD style is exposed through expect or should interfaces. In both scenarios, you chain together natural language assertions.

```javascript
var expect = require('chai').expect
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(beverages).to.have.property('tea').with.lengthOf(3);
```

Expect also allows you to include arbitrary messages to prepend to any failed assertions that might occur.

```javascript
var answer = 43;

// AssertionError: expected 43 to equal 42.
expect(answer).to.equal(42);

// AssertionError: topic [answer]: expected 43 to equal 42.
expect(answer, 'topic [answer]').to.equal(42);
```

This comes in handy when being used with non-descript topics such as booleans or numbers.

### Should

The should style allows for the same chainable assertions as the expect interface, however it extends each object with a should property to start your chain. This style has some issues when used with Internet Explorer, so be aware of browser compatibility.

```javascript
const should = require('chai').should() //actually call the function
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
beverages.should.have.property('tea').with.lengthOf(3);
```
