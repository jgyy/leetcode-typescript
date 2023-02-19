function minTotalDistance(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const row = [];
    const col = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                row.push(i);
                col.push(j);
            }
        }
    }
    col.sort((a, b) => a - b);
    let i = 0;
    let j = row.length - 1;
    let res = 0;
    while (i < j) {
        res += row[j] - row[i] + col[j] - col[i];
        i++;
        j--;
    }
    return res;
};

console.log(minTotalDistance([[1, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]]));
console.log(minTotalDistance([[1, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]]) === 6);