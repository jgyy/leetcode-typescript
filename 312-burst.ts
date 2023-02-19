function maxCoins(nums: number[]): number {
    const n = nums.length;
    const points = new Array(n + 2).fill(1);
    for (let i = 0; i < n; i++) {
        points[i + 1] = nums[i];
    }
    const dp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));
    for (let len = 1; len <= n; len++) {
        for (let left = 1; left <= n - len + 1; left++) {
            const right = left + len - 1;
            for (let i = left; i <= right; i++) {
                dp[left][right] = Math.max(dp[left][right], dp[left][i - 1] + points[left - 1] * points[i] * points[right + 1] + dp[i + 1][right]);
            }
        }
    }
    return dp[1][n];
};

console.log(maxCoins([3, 1, 5, 8]));