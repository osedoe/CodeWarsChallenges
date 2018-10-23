function sumPrimes(value) {
    var array =  [];
    var primes = [];
  
    for ( let i = 2; i <= value; i++ ) {
      let a = 0;
      for ( let j = 2; j < i; j++ ) {
        if ( i%j == 0 ) {
          a++;
        }
      }
      if ( a == 0 ) {
        primes.push(i);
      }
    }

    return primes;
}

module.exports = sumPrimes;
