function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = [];
    const dfs = (target: number, combine: number[], idx: number) => {
        if (idx === candidates.length) {
            return;
        }
        if (target === 0) {
            res.push(combine.slice());
            return;
        }
        dfs(target, combine, idx + 1);
        if (target - candidates[idx] >= 0) {
            combine.push(candidates[idx]);
            dfs(target - candidates[idx], combine, idx);
            combine.pop();
        }
    };
    dfs(target, [], 0);
    return res;
};

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2, 2, 3], [7]]