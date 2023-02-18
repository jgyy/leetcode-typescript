/**
 Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums: number[]): void {
    for (let i = 1; i < nums.length; i++) {
        const a = nums[i - 1];
        if ((i % 2 === 1) === (a > nums[i])) {
            nums[i - 1] = nums[i];
            nums[i] = a;
        }
    }
    console.log(nums);
};

wiggleSort([1, 5, 1, 1, 6, 4]); // [1, 4, 1, 5, 1, 6]