# TV Remote

[TV Remote](https://www.codewars.com/kata/tv-remote/train/javascript)

## Introduction

My TV remote control has arrow buttons and an `OK` button. I can use these to move a "cursor" on a logical screen keyboard to type woords.

The screen "keyboard" layout looks like this:

```table
a   b   c   d   e   1   2   3
f   g   h   i   j   4   5   6
k   l   m   n   o   7   8   9
p   q   r   s   t   .   @   0
u   v   w   x   y   z   _   /
```

## Task

How many button presses on my remote are requireds to type a given `word`?

_Notes:_

- The cursos always start on the letter `a` (top left)
- Remember to also press `OK` to "accept" each letter
- Take a direct route from one letter to the next
- The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite)

## Example

word = `codewars`

- c = a - b - c - OK = 3
- o = c - d - e - j - o - OK = 5
- d = o - j - e - d - OK = 4
- e = d - e - OK = 2
- w = e - j - o - t - y - x - w - OK = 7
- a = w - r - m - h - c - b - a - OK = 7
- r = a - f - k - p - q - r - OK = 6
- s = r - s - OK = 2

Answer = 3 + 5 + 4 + 2 + 7 + 7 + 6 + 2 = 36

### Test to implement

```javascript
describe("Sample Tests", function() {

  it("example", function() {
    Test.assertEquals(tvRemote("codewars"), 36);
  });
  
  it("misc", function() {
    Test.assertEquals(tvRemote("does"), 16);
    Test.assertEquals(tvRemote("your"), 23);
    Test.assertEquals(tvRemote("solution"), 33);
    Test.assertEquals(tvRemote("work"), 20);
    Test.assertEquals(tvRemote("for"), 12);
    Test.assertEquals(tvRemote("these"), 27);
    Test.assertEquals(tvRemote("words"), 25);
  });
  
});
```