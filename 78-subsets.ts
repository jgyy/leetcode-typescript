function subsets(nums: number[]): number[][] {
    const n = nums.length;
    const res: number[][] = [];
    const t: number[] = [];
    const dfs = (cur: number) => {
        if (cur === n) {
            res.push(t.slice());
            return;
        }
        t.push(nums[cur]);
        dfs(cur + 1);
        t.pop();
        dfs(cur + 1);
    };
    dfs(0);
    return res;
};

console.log(subsets([1, 2, 3]));