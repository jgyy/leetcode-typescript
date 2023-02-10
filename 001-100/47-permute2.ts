function permuteUnique(nums: number[]): number[][] {
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
        const set = new Set();
        for (let i = first; i < nums.length; i++) {
            if (set.has(nums[i])) {
                continue;
            }
            set.add(nums[i]);
            swap(nums, first, i);
            backtrack(nums, first + 1);
            swap(nums, first, i);
        }
    }

    backtrack(nums, 0);
    return result;
};

console.log(permuteUnique([1, 1, 2])); // [[1, 1, 2], [1, 2, 1], [2, 1, 1]]