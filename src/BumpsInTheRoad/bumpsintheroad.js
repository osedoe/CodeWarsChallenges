const test = require("./../../tests/TestSetup.js");

const bump = (x, bumpCount = 0) => {
    for(let i=0; i < x.length; i++) {
        if (x.charAt(i) === "n") bumpCount++;
    }
    return (bumpCount <= 15) ? "Woohoo!" : "Car Dead";
};

bump("_nnnnnnn_n__n______nn__nn_nnn");

// test.describe("Example tests",_=>{
//     test.assertEquals(bump("n"), "Woohoo!");
//     test.assertEquals(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
//     test.assertEquals(bump("______n___n_"), "Woohoo!");
// });
