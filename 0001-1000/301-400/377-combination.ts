function combinationSum4(nums: number[], target: number): number {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= target; i++) {
        for (let num of nums) {
            if (i - num >= 0) {
                dp[i] += dp[i - num];
            }
        }
    }
    return dp[target];
};

console.log(combinationSum4([1, 2, 3], 4));