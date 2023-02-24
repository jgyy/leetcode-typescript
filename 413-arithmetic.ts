function numberOfArithmeticSlices(nums: number[]): number {
    let n = nums.length;
    let dp = new Array(n).fill(0);
    let sum = 0;
    for (let i = 2; i < n; i++) {
        if (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
            dp[i] = dp[i - 1] + 1;
            sum += dp[i];
        }
    }
    return sum;
};

console.log(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));