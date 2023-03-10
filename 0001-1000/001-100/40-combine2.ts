function combinationSum2(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    candidates.sort((a, b) => a - b);
    const dfs = (start: number, path: number[], sum: number) => {
        if (sum > target) {
            return;
        }
        if (sum === target) {
            result.push(path);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }
            dfs(i + 1, [...path, candidates[i]], sum + candidates[i]);
        }
    };
    dfs(0, [], 0);
    return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); // [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]