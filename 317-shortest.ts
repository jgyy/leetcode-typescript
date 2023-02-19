function shortestDistance(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const dist = new Array(m).fill(0).map(() => new Array(n).fill(0));
    const reach = new Array(m).fill(0).map(() => new Array(n).fill(0));
    let buildings = 0;
    const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                buildings++;
                const queue: number[][] = [];
                queue.push([i, j]);
                let level = 1;
                const visited = new Set();
                visited.add(`${i}-${j}`);
                while (queue.length > 0) {
                    const size = queue.length;
                    for (let k = 0; k < size; k++) {
                        const [x, y] = queue.shift()!;
                        for (const [dx, dy] of dirs) {
                            const nx = x + dx;
                            const ny = y + dy;
                            if (nx < 0 || nx >= m || ny < 0 || ny >= n || grid[nx][ny] !== 0 || visited.has(`${nx}-${ny}`)) {
                                continue;
                            }
                            visited.add(`${nx}-${ny}`);
                            dist[nx][ny] += level;
                            reach[nx][ny]++;
                            queue.push([nx, ny]);
                        }
                    }
                    level++;
                }
            }
        }
    }

    let minDist = Number.MAX_VALUE;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0 && reach[i][j] === buildings) {
                minDist = Math.min(minDist, dist[i][j]);
            }
        }
    }

    return minDist === Number.MAX_VALUE ? -1 : minDist;
};

console.log(shortestDistance([[1, 0, 2, 0, 1], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]]));