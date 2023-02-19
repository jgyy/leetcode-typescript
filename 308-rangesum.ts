/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */
class NumMatrix {
    matrix: number[][] = [];

    constructor(matrix: number[][]) {
        this.matrix = matrix;
    }

    update(row: number, col: number, val: number): void {
        this.matrix[row][col] = val;
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let sum = 0;
        for (let i = row1; i <= row2; i++) {
            for (let j = col1; j <= col2; j++) {
                sum += this.matrix[i][j];
            }
        }
        return sum;
    }
}

const obj = new NumMatrix([
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
]);
console.log(obj.sumRegion(2, 1, 4, 3));
obj.update(3, 2, 2);
console.log(obj.sumRegion(2, 1, 4, 3));
