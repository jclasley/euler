// What is the 10001st prime?

function solve(x) {
    // build the sieve array
    const sieve = [];
    for (let i = 0; i < x; i++) { // expand this if you need more
        sieve.push(true);
    }
    sieve[0] = false;
    sieve[1] = false;
    for (let i = 2; i < Math.ceil(Math.sqrt(x)); i++) {
        if (sieve[i] === true) {
            let p = i ** 2;
            while (p <= x) {
                sieve[p] = false;
                p = p + i;
            }
        }
    }
    return sieve;
}

const primes = solve(105000);
// figure out the right number of elements in the sieve
// in order to get the 10001st prime
console.log(primes.filter(x => x).length);

let primeCount = 0;
for (let i = 0; i < primes.length; i++) {
    if (primes[i]) {
        primeCount += 1;
    }
    if (primeCount === 10001) {
        console.log(i);
        break;
    }
}