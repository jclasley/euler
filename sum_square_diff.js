// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function solve() {
    let squareSum = 0;
    let sumSquare = 0;
    for (let i = 1; i <= 100; i++) {
        squareSum += i ** 2;
        sumSquare += i;
    }
    return sumSquare ** 2 - squareSum;
}

console.log(solve())