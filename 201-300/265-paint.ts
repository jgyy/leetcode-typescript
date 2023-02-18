function minCostII(costs: number[][]): number {
    const m = costs.length;
    if (m === 0) {
        return 0;
    }
    const n = costs[0].length;
    if (n === 0) {
        return 0;
    }
    let min1 = -1;
    let min2 = -1;
    for (let i = 0; i < m; i++) {
        let last1 = min1;
        let last2 = min2;
        min1 = -1;
        min2 = -1;
        for (let j = 0; j < n; j++) {
            if (j !== last1) {
                costs[i][j] += last1 < 0 ? 0 : costs[i - 1][last1];
            } else {
                costs[i][j] += last2 < 0 ? 0 : costs[i - 1][last2];
            }
            if (min1 < 0 || costs[i][j] < costs[i][min1]) {
                min2 = min1;
                min1 = j;
            } else if (min2 < 0 || costs[i][j] < costs[i][min2]) {
                min2 = j;
            }
        }
    }
    return costs[m - 1][min1];
};

console.log(minCostII([[1, 5, 3], [2, 9, 4]]));