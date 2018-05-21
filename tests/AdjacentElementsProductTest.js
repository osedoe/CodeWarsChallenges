let adjacentElementsProduct = require('./../src/AdjacentElementsProduct/app');

// Array cases
const exampleArr = [3, 6, -2, -5, 7, 3];

// Test
// Write it properly, you cunt
let AEPTest = (arr, result) => (adjacentElementsProduct(exampleArr) === result) ?
    console.log('Test passed') 
    : console.log('Test failed');