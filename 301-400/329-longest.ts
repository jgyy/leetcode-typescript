function longestIncreasingPath(matrix: number[][]): number {
    if (matrix.length === 0) {
        return 0;
    }
    const m = matrix.length;
    const n = matrix[0].length;
    const dfs = (matrix: number[][], i: number, j: number, cache: number[][]): number => {
        if (cache[i][j] !== 0) {
            return cache[i][j];
        }
        const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
        let max = 0;
        for (const dir of dirs) {
            const x = i + dir[0];
            const y = j + dir[1];
            if (x >= 0 && x < m && y >= 0 && y < n && matrix[x][y] > matrix[i][j]) {
                max = Math.max(max, dfs(matrix, x, y, cache));
            }
        }
        cache[i][j] = max + 1;
        return cache[i][j];
    };
    let result = 0;
    const cache = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            result = Math.max(result, dfs(matrix, i, j, cache));
        }
    }
    return result;
};

console.log(longestIncreasingPath([[9, 9, 4], [6, 6, 8], [2, 1, 1]]));