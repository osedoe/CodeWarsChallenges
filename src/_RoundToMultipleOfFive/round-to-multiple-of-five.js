const roundToNext5 = (value) => {
  
    if (!typeof(value) == Number) {
        console.log('Entrada no valida');
    }
    else if (value >= 0) {
        if ( value%5 == 0) {
            return value;
        }

        let k = value%5;
        let num = value + 5 - k;

        return num;
    } 
    else {
        let k = value%5;
        let num = value - 5 + k; 
        return num;
    }
};

module.exports = roundToNext5;
