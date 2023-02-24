function thirdMax(nums: number[]): number {
    let first = -Infinity, second = -Infinity, third = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == first || nums[i] == second || nums[i] == third) continue;
        if (nums[i] > first) {
            third = second;
            second = first;
            first = nums[i];
        } else if (nums[i] > second) {
            third = second;
            second = nums[i];
        } else if (nums[i] > third) {
            third = nums[i];
        }
    }
    return third == -Infinity ? first : third;
};

console.log(thirdMax([3, 2, 1]));