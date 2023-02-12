function maxSubArray(nums: number[]): number {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1];
        }
        max = Math.max(max, nums[i]);
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));