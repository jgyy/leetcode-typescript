/**
 Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums: number[]): void {
    const n = nums.length;
    const a = [...nums].sort((a, b) => a - b);
    let i = 0;
    let j = (n - 1) >> 1;
    let k = n - 1;
    while (i < n) {
        nums[i] = a[j--];
        if (i + 1 < n) {
            nums[i + 1] = a[k--];
        }
        i += 2;
    }
    console.log(nums);
};

wiggleSort([3, 5, 2, 1, 6, 4]);
wiggleSort([5, 5, 5, 4, 4, 4, 4]);