function permute(nums: number[]): number[][] {
    const result: number[][] = [];

    function swap(nums: number[], i: number, j: number) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    function backtrack(nums: number[], first: number) {
        if (first === nums.length) {
            result.push([...nums]);
        }
        for (let i = first; i < nums.length; i++) {
            swap(nums, first, i);
            backtrack(nums, first + 1);
            swap(nums, first, i);
        }
    }

    backtrack(nums, 0);
    return result;
};

console.log(permute([1, 2, 3])); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]