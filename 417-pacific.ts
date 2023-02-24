function pacificAtlantic(heights: number[][]): number[][] {
    let m = heights.length, n = heights[0].length;
    let pacific = Array(m).fill(0).map(() => Array(n).fill(false));
    let atlantic = Array(m).fill(0).map(() => Array(n).fill(false));
    let dfs = (i: number, j: number, ocean: boolean[][]) => {
        ocean[i][j] = true;
        [[0, 1], [0, -1], [1, 0], [-1, 0]].forEach(([x, y]) => {
            let r = i + x, c = j + y;
            if (r >= 0 && r < m && c >= 0 && c < n && !ocean[r][c] && heights[r][c] >= heights[i][j]) dfs(r, c, ocean);
        });
    };
    for (let i = 0; i < m; i++) {
        dfs(i, 0, pacific);
        dfs(i, n - 1, atlantic);
    }
    for (let i = 0; i < n; i++) {
        dfs(0, i, pacific);
        dfs(m - 1, i, atlantic);
    }
    let result = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) result.push([i, j]);
        }
    }
    return result;
};

console.log(pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4]
]));