function maxKilledEnemies(grid: string[][]): number {
    let max = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '0') {
                let count = 0;
                let k = j;
                while (k >= 0 && grid[i][k] !== 'W') {
                    if (grid[i][k] === 'E') {
                        count++;
                    }
                    k--;
                }
                k = j + 1;
                while (k < grid[i].length && grid[i][k] !== 'W') {
                    if (grid[i][k] === 'E') {
                        count++;
                    }
                    k++;
                }
                k = i;
                while (k >= 0 && grid[k][j] !== 'W') {
                    if (grid[k][j] === 'E') {
                        count++;
                    }
                    k--;
                }
                k = i + 1;
                while (k < grid.length && grid[k][j] !== 'W') {
                    if (grid[k][j] === 'E') {
                        count++;
                    }
                    k++;
                }
                max = Math.max(max, count);
            }
        }
    }
    return max;
};

console.log(maxKilledEnemies([
    ["0", "E", "0", "0"],
    ["E", "0", "W", "E"],
    ["0", "E", "0", "0"]
]));