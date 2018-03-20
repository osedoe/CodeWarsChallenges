const conjugate = (verb) => {
    
    let objectArr = {};
    let verbArr = verb.split("");
    verbArr.splice(verb.length-2,2); // [ 's', 'a', 'l', 't' ]
    console.log(verbArr);
    objectArr[verb] = [];
    console.log(objectArr);

    if (verb.endsWith("ar")) {
        for (let i = 0; i < 6; i++) {
            const element = objectArr[verb];
            let finalArr;
            switch (element[i]) {
                case 0:
                    finalArr = verbArr.concat( [ "o" ] );
                    finalArr.join("");
                    objectArr.saltar.push();
                    console.log(finalArr);
                    break;
                case 1:
                    finalArr = verbArr.concat(["a", "s"]);
                    finalArr.join("");
                    console.log(finalArr);
                    break;
                case 2:
                    finalArr = verbArr.concat(["a"]);
                    finalArr.join("");
                    console.log(finalArr);
                    break;
                case 3:
                    finalArr = verbArr.concat(["a","m","o","s"]);
                    finalArr.join("");
                    console.log(finalArr);
                    break;
                case 4:
                    finalArr = verbArr.concat(["a","i","s"]);
                    finalArr.join("");
                    console.log(finalArr);
                    break;
                case 5:
                    finalArr = verbArr.concat(["a","n"]);
                    finalArr.join("");
                    console.log(finalArr);
                    break;
                default:
                    break;
            }
        }        
        
    } else if (verb.endsWith("er")) {

        console.log("Este verbo termina en -er.");
        verboEr(verb);
    } else if (verb.endsWith("ir")) {
        console.log("Este verbo termina en -ir.");
        verboIr(verb);
    }

};

conjugate("saltar");