function nthUglyNumber(n: number): number {
    const dp: number[] = [1];
    let p2 = 0;
    let p3 = 0;
    let p5 = 0;
    for (let i = 1; i < n; i++) {
        const num2 = dp[p2] * 2;
        const num3 = dp[p3] * 3;
        const num5 = dp[p5] * 5;
        const min = Math.min(num2, num3, num5);
        if (min === num2) {
            p2++;
        }
        if (min === num3) {
            p3++;
        }
        if (min === num5) {
            p5++;
        }
        dp[i] = min;
    }
    return dp[n - 1];
};

console.log(nthUglyNumber(10));