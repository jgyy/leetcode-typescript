function countPrimes(n: number): number {
    const isPrime = new Array(n).fill(true);
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
            for (let j = 2; i * j < n; j++) {
                isPrime[i * j] = false;
            }
        }
    }
    return count;
};

console.log(countPrimes(10));