const arithmetic = (a, b, operator) => {
    let answer;
    switch (operator) {
        case "add":
            answer = a+b;
            break;

        case "subtract":
            answer = a-b;
            break;

        case "multiply":
            answer = a*b;
            break;

        case "divide":
            answer = a/b;
            break;
    }
    return answer;
};

module.exports = arithmetic;