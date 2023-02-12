function generateMatrix(n: number): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < n; i++) {
        result.push([]);
        for (let j = 0; j < n; j++) {
            result[i].push(0);
        }
    }
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    let num = 1;
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            result[top][i] = num;
            num++;
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            result[i][right] = num;
            num++;
        }
        right--;
        for (let i = right; i >= left; i--) {
            result[bottom][i] = num;
            num++;
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            result[i][left] = num;
            num++;
        }
        left++;
    }
    return result;
};

console.log(generateMatrix(3));