function combinationSum3(k: number, n: number): number[][] {
    const result: number[][] = [];
    const helper = (k: number, n: number, start: number, temp: number[]): void => {
        if (k < 0 || n < 0) return;
        if (k === 0 && n === 0) {
            result.push(temp);
            return;
        }
        for (let i = start; i <= 9; i++) {
            helper(k - 1, n - i, i + 1, [...temp, i]);
        }
    }
    helper(k, n, 1, []);
    return result;
};

console.log(combinationSum3(3, 7));