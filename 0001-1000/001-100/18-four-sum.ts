function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);
    const result: number[][] = [];
    const dfs = (index: number, path: number[], sum: number) => {
        if (path.length === 4) {
            if (sum === target) {
                result.push(path);
            }
            return;
        }
        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) {
                continue;
            }
            dfs(i + 1, [...path, nums[i]], sum + nums[i]);
        }
    };
    dfs(0, [], 0);
    return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));