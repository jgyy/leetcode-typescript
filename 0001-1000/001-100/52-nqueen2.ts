function totalNQueens(n: number): number {
    let count = 0;
    const dfs = (row: number, cols: Set<number>, pie: Set<number>, na: Set<number>) => {
        if (row >= n) {
            count++;
            return;
        }
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || pie.has(row + col) || na.has(row - col)) continue;
            cols.add(col);
            pie.add(row + col);
            na.add(row - col);
            dfs(row + 1, cols, pie, na);
            cols.delete(col);
            pie.delete(row + col);
            na.delete(row - col);
        }
    }
    dfs(0, new Set(), new Set(), new Set());
    return count;
};

console.log(totalNQueens(4));