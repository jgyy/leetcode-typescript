function subsetsWithDup(nums: number[]): number[][] {
    const res: number[][] = [];
    nums.sort((a, b) => a - b);
    const dfs = (path: number[], start: number) => {
        res.push(path);
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;
            dfs([...path, nums[i]], i + 1);
        }
    };
    dfs([], 0);
    return res;
};

console.log(subsetsWithDup([1, 2, 2]));