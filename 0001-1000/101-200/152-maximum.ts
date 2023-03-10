function maxProduct(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    let max = nums[0];
    let min = nums[0];
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const a = max * nums[i];
        const b = min * nums[i];
        max = Math.max(nums[i], a, b);
        min = Math.min(nums[i], a, b);
        result = Math.max(result, max);
    }
    return result;
};

console.log(maxProduct([2, 3, -2, 4]));