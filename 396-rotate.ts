function maxRotateFunction(nums: number[]): number {
    let sum = 0;
    let f = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        f += i * nums[i];
    }
    let max = f;
    for (let i = nums.length - 1; i >= 0; i--) {
        f = f + sum - nums.length * nums[i];
        max = Math.max(max, f);
    }
    return max;
};

console.log(maxRotateFunction([4, 3, 2, 6]));