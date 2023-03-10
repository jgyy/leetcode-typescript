/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            nums[i] = nums[j];
            i++;
        }
    }
    for (; i < nums.length; i++) {
        nums[i] = 0;
    }
    console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]); // [1, 3, 12, 0, 0]