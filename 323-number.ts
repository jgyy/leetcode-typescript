function countComponents(n: number, edges: number[][]): number {
    const graph = new Map<number, number[]>();
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    for (const edge of edges) {
        graph.get(edge[0])!.push(edge[1]);
        graph.get(edge[1])!.push(edge[0]);
    }

    let result = 0;
    const visited = new Set<number>();
    const dfs = (node: number) => {
        if (visited.has(node)) {
            return;
        }
        visited.add(node);
        for (const neighbor of graph.get(node)!) {
            dfs(neighbor);
        }
    };

    for (let i = 0; i < n; i++) {
        if (visited.has(i)) {
            continue;
        }
        result++;
        dfs(i);
    }
    return result;
};

console.log(countComponents(5, [[0, 1], [1, 2], [3, 4]]));