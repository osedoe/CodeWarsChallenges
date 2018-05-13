const exampleArr = [3, 6, -2, -5, 7, 3];

const adjacentElementsProduct = arrInput => (
    Math.max(...arrInput
        .slice(0, -1)
        .map((n, i) => n * arrInput[i +1])
    )
);


adjacentElementsProduct(exampleArr);

let equalTest = (arr, result) => {
    if (adjacentElementsProduct(arr) === result) {
        console.log(`Test passed. The result of the function is: ${adjacentElementsProduct(arr)} as expected`);
    } else {
        console.log(`Test failed. Expected result is ${result}, but got ${adjacentElementsProduct(arr)}`);
    }
};

equalTest([3, 6, -2, -5, 7, 3], 21);