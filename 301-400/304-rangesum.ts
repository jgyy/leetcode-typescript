/**
 * Your NumMatrix304 object will be instantiated and called as such:
 * var obj = new NumMatrix304(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
class NumMatrix304 {
    sum: number[][];

    constructor(matrix: number[][]) {
        const m = matrix.length;
        const n = matrix[0].length;
        this.sum = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                this.sum[i][j] = this.sum[i - 1][j] + this.sum[i][j - 1] - this.sum[i - 1][j - 1] + matrix[i - 1][j - 1];
            }
        }
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        return this.sum[row2 + 1][col2 + 1] - this.sum[row2 + 1][col1] - this.sum[row1][col2 + 1] + this.sum[row1][col1];
    }
}

const numMatrix304 = new NumMatrix304([
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
]);
console.log(numMatrix304.sumRegion(2, 1, 4, 3)); // 8
console.log(numMatrix304.sumRegion(1, 1, 2, 2)); // 11
console.log(numMatrix304.sumRegion(1, 2, 2, 4)); // 12
