function squareSum(numbers){
    let total = 0;
    numbers.forEach( function(number) {
      let sqr = number*number;
      total += sqr;
    });
    console.log(total);
    return total;
}
  

squareSum([1, 2, 2]);