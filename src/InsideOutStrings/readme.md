# Inside Out Strings

[Inside Out Strings](https://www.codewars.com/kata/inside-out-strings/train/javascript)

## Instructions

You are given a string of words `x`. For each word withing the string, you need to turn the word "inside out". The internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the "middle" letter of the word where it is.

For example:

- `taxi` would become `atix`
- `taxis` would become `atxsi`

### Tests to implement

```javascript
Test.describe("Example tests",_=>{
Test.assertEquals(insideOut('man i need a taxi up to ubud'), 'man i ende a atix up to budu');
Test.assertEquals(insideOut('what time are we climbing up the volcano'), 'hwta item are we milcgnib up the lovcona'); 
Test.assertEquals(insideOut('take me to semynak'), 'atek me to mesykan');
});
```