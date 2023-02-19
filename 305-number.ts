function numIslands2(m: number, n: number, positions: number[][]): number[] {
    const result: number[] = [];
    const parent: number[] = [];
    const rank: number[] = [];
    const size: number[] = [];
    const count: number[] = [];
    let sizeOfIsland = 0;

    for (let i = 0; i < m * n; i++) {
        parent[i] = i;
        rank[i] = 0;
        size[i] = 1;
        count[i] = 0;
    }

    const find = (x: number): number => {
        if (x !== parent[x]) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    };

    const union = (x: number, y: number): void => {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
                size[rootX] += size[rootY];
            } else if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
                size[rootY] += size[rootX];
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
                size[rootX] += size[rootY];
            }
            sizeOfIsland--;
        }
    };

    for (const [x, y] of positions) {
        const index = x * n + y;
        if (count[index] === 1) {
            result.push(sizeOfIsland);
            continue;
        }
        sizeOfIsland++;
        count[index] = 1;
        if (x > 0 && count[index - n] === 1) {
            union(index, index - n);
        }
        if (x < m - 1 && count[index + n] === 1) {
            union(index, index + n);
        }
        if (y > 0 && count[index - 1] === 1) {
            union(index, index - 1);
        }
        if (y < n - 1 && count[index + 1] === 1) {
            union(index, index + 1);
        }
        result.push(sizeOfIsland);
    }

    return result;
};

console.log(numIslands2(3, 3, [[0, 0], [0, 1], [1, 2], [2, 1]]));