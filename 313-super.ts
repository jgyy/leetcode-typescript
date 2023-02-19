function nthSuperUglyNumber(n: number, primes: number[]): number {
    const dp: number[] = new Array(n + 1).fill(0);
    dp[1] = 1;
    const pointers: number[] = new Array(primes.length).fill(1);
    for (let i = 2; i <= n; i++) {
        let min = Number.MAX_VALUE;
        for (let j = 0; j < primes.length; j++) {
            min = Math.min(min, dp[pointers[j]] * primes[j]);
        }
        dp[i] = min;
        for (let j = 0; j < primes.length; j++) {
            if (min === dp[pointers[j]] * primes[j]) {
                pointers[j]++;
            }
        }
    }
    return dp[n];
};

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]));