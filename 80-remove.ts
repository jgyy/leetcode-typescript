function removeDuplicates(nums: number[]): number {
    let i = 1;
    let count = 1;

    while (i < nums.length) {
        if (nums[i] === nums[i - 1]) {
            count++;
            if (count > 2) {
                nums.splice(i, 1);
                i--;
            }
        } else {
            count = 1;
        }
        i++;
    }
            
    return nums.length;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));