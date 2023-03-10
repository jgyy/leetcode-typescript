function canPartition(nums: number[]): boolean {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if (sum % 2 == 1) return false;
    sum /= 2;
    let dp = Array(sum + 1).fill(false);
    dp[0] = true;
    for (let i = 0; i < nums.length; i++) {
        for (let j = sum; j >= nums[i]; j--) {
            dp[j] = dp[j] || dp[j - nums[i]];
        }
    }
    return dp[sum];
};

console.log(canPartition([1, 5, 11, 5]));