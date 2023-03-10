function spiralOrder(matrix: number[][]): number[] {
    if (matrix.length === 0) return [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    let res: number[] = [];
    while (true) {
        // left to right
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;
        if (top > bottom) break;
        // top to bottom
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        right--;
        if (left > right) break;
        // right to left
        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i]);
        }
        bottom--;
        if (top > bottom) break;
        // bottom to top
        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left]);
        }
        left++;
        if (left > right) break;
    }
    return res;
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));