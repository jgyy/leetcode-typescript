function generate(numRows: number): number[][] {
    if (numRows === 0) {
        return [];
    }
    let result: number[][] = [[1]];
    for (let i = 1; i < numRows; i++) {
        result.push([]);
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                result[i].push(1);
            } else {
                result[i].push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }
    }
    return result;
};

console.log(generate(5));