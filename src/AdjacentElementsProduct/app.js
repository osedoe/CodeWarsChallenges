// const exampleArr = [3, 6, -2, -5, 7, 3];

const adjacentElementsProduct = arrInput => (Math.max(...arrInput
        .slice(0, -1)
        .map((n, i) => n * arrInput[i +1]))
    );

// adjacentElementsProduct(exampleArr);

module.exports = adjacentElementsProduct;