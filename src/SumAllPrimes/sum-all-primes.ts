// FIXME: Check error
export function sumPrimes(value) {
    let primes = [];
    let sum = 0;
    for (let i = 2; i <= value; i++) {
        let a = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                a++;
            }
        }
        if (a == 0) {
            primes.push(i);
        }
    }
    for (let i = 0; i < primes.length; i++) {
        sum = sum + primes[i];
    }
    return sum;
}