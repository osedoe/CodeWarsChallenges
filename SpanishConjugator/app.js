const conjugate = (verb) => {
    



    if (verb.endsWith("ar")) {

        let objectArr = {};
        let verbArr = verb.split("");
        verbArr.splice(verb.length-2,2); // [ 's', 'a', 'l', 't' ]
        
        objectArr[verb] = [];

    } else if (verb.endsWith("er")) {

        console.log("Este verbo termina en -er.");
        verboEr(verb);
    } else if (verb.endsWith("ir")) {
        console.log("Este verbo termina en -ir.");
        verboIr(verb);
    }

};

conjugate("saltar");