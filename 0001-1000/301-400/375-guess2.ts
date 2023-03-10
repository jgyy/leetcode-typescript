function getMoneyAmount(n: number): number {
    const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let len = 2; len <= n; len++) {
        for (let start = 1; start <= n - len + 1; start++) {
            let globalMin = Number.MAX_SAFE_INTEGER;
            for (let pivot = start; pivot < start + len - 1; pivot++) {
                const localMax = pivot + Math.max(dp[start][pivot - 1], dp[pivot + 1][start + len - 1]);
                globalMin = Math.min(globalMin, localMax);
            }
            dp[start][start + len - 1] = globalMin;
        }
    }
    return dp[1][n];
};

console.log(getMoneyAmount(10));