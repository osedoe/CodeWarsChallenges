const exampleArr = [3, 6, -2, -5, 7, 3];
const adjacentElementsProduct = inputArr => {
    let finalArr = [];
    for (let i = 0; i < inputArr.length; i+2) {
        let sum = inputArr[i] * inputArr[i+1];
        finalArr.push(sum);
    }
    console.log(finalArr);
    return finalArr.reduce( (a,b) => Math.max(a,b) );
};    

adjacentElementsProduct(exampleArr);


console.log(err);

let equalTest = (arr, result) => {
    if (adjacentElementsProduct(arr) === result) {
        console.log("Correcto");
    } else {
        console.log("Incorrecto");
    }
};

// equalTest([3, 6, -2, -5, 7, 3], 21);