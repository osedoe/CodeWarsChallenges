const adjacentElementsProduct = arrInput => (Math.max(...arrInput
        .slice(0, -1)
        .map((n, i) => n * arrInput[i +1]))
    );

// export default adjacentElementsProduct;
module.exports = adjacentElementsProduct;