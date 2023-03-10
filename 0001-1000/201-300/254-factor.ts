function getFactors(n: number): number[][] {
    const result: number[][] = [];
    const traverse = (start: number, path: number[], n: number) => {
        if (n === 1) {
            if (path.length > 1) {
                result.push(path.slice());
            }
            return;
        }
        for (let i = start; i <= n; i++) {
            if (n % i === 0) {
                path.push(i);
                traverse(i, path, n / i);
                path.pop();
            }
        }
    };
    traverse(2, [], n);
    return result;
};

console.log(getFactors(12));