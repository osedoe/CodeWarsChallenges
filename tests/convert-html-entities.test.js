// convertHTML("Dolce & Gabbana") should return 'Dolce &​amp; Gabbana'.
// convertHTML("Hamburgers < Pizza < Tacos") should return 'Hamburgers &​lt; Pizza &​lt; Tacos'.
// convertHTML("Sixty > twelve") should return 'Sixty &​gt; twelve'.
// convertHTML('Stuff in "quotation marks"') should return 'Stuff in &​quot;quotation marks&​quot;'.
// convertHTML("Schindler's List") should return 'Schindler&​apos;s List'.
// convertHTML("<>") should return '&lt;&​gt;'.
// convertHTML("abc") should return 'abc'.

const convertHTML = require('../src/_ConvertHTMLEntities/convert-html-entities');

describe.skip('Convert HTML Entities' , () => {
    describe('convert the characters &, <, >, " (double quotes) and \' in a string to their HTML entities', () => {
        it('should return "Dolce &amp; Gabbana"', () => {
            expect(convertHTML('Dolce & Gabanna')).toEqual('Dolce &amp; Gabbana');
        });
        it('should return "Hamburgers &lt; Pizza &lt; Tacos"', () => {
            expect(convertHTML('Hamburgers < Pizza < Tacos')).toEqual('Hamburgers &lt; Pizza &lt; Tacos');
        });
        it('should return "Sixty > twelve"', () => {
            expect(convertHTML('Sixty > twelve')).toEqual('Sixty &gt; twelve');
        });
        it('should return "Stuff in &quot;quotastion marks&quot;"', () => {
            expect(convertHTML('Stuff in "quotation marks')).toEqual('Stuff in &quot;quotation marks&quot;');
        });
        it('should return "Schindler&apos;s List"', () => {
            expect(convertHTML('Schindler\'s List')).toEqual('Schindler&apos;s List');
        });
        it('should return "&lt;&gt;"', () => {
            expect(convertHTML('<>')).toEqual('&lt;&gt;');
        });
        it('should  return "abc"', () => {
            expect(convertHTML('abc')).toEqual('abc');
        })
    });
});