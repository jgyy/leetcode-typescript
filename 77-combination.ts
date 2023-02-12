function combine(n: number, k: number): number[][] {
    const res: number[][] = [];
    const path: number[] = [];
    const backtrack = (start: number) => {
        if (path.length === k) {
            res.push(path.slice());
            return;
        }
        for (let i = start; i <= n; i++) {
            path.push(i);
            backtrack(i + 1);
            path.pop();
        }
    };
    backtrack(1);
    return res;
};

console.log(combine(4, 2));