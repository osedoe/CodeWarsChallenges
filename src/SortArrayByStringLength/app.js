let sortByLength = (array) => {
    let arr = array;
    let arrLength = array.length;
    for (let i = 0; i < arrLength; i++) {
        if (arr[i].length > arr[i+1].length) {
            let element = arr.splice(i,1);
            arr.push(element);
        }
    }
    console.log(array);
};

sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]);
sortByLength(["Beg", "Life", "I", "To"]);
sortByLength(["", "Moderately", "Brains", "Pizza"]);
sortByLength(["Longer", "Longest", "Short"]);
