exports = {
  
};

const assertEqual = (result, action) => {

    action = (x) => {
        return action(x);
    };
    if (result === action(x)) {
        console.log("Test passed");
    } else {
        console.log("Test faield");
    }
};

