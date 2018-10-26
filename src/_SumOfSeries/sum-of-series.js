const seriesSum = (value) => {
    let sum = 1;
  
    if ( !typeof(value) == Number || value <= 0 || !Number.isInteger(value) ) {
      console.log('unvalid entry');
    }
  
    else if ( value == 1) {
      return value.toFixed(2).toString();
    }
  
    else {
      for ( let i = 1; i <= value; i++) {
        let k = i + 3;
        sum = sum + 1/k;
      }

      let result = sum.toFixed(2);
      return result.toString();
    }   
  };

module.exports = seriesSum;
