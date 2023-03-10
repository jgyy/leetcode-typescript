function validTree(n: number, edges: number[][]): boolean {
    if (edges.length !== n - 1) {
        return false;
    }
    const graph: number[][] = [];
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for (const edge of edges) {
        graph[edge[0]].push(edge[1]);
        graph[edge[1]].push(edge[0]);
    }
    const visited: boolean[] = Array(n).fill(false);
    const traverse = (i: number) => {
        visited[i] = true;
        for (const j of graph[i]) {
            if (!visited[j]) {
                traverse(j);
            }
        }
    };
    traverse(0);
    for (const v of visited) {
        if (!v) {
            return false;
        }
    }
    return true;
};

console.log(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]));