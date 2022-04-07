const generateSieveTo = x => {
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

const primes = generateSieveTo(2000000);
console.log(primes.map((x, n) => x ? n : 0).slice(0, 20));
const ans = primes.map((x, n) => x ? n : 0).reduce((m, x) => m + x)
console.log(ans);
