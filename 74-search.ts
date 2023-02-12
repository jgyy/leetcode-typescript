function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length;
    const n = matrix[0].length;
    let i = 0;
    let j = n - 1;
    while (i < m && j >= 0) {
        if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] > target) {
            j--;
        } else {
            i++;
        }
    }
    return false;
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3));