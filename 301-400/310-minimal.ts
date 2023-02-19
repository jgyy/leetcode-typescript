function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n === 1) {
        return [0];
    }

    const graph = new Map<number, number[]>();
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }

    for (const edge of edges) {
        graph.get(edge[0])!.push(edge[1]);
        graph.get(edge[1])!.push(edge[0]);
    }

    let leaves: number[] = [];
    for (let i = 0; i < n; i++) {
        if (graph.get(i)!.length === 1) {
            leaves.push(i);
        }
    }

    while (n > 2) {
        n -= leaves.length;
        const newLeaves: number[] = [];
        for (const leaf of leaves) {
            const neighbor = graph.get(leaf)!.pop();
            graph.get(neighbor!)!.splice(graph.get(neighbor!)!.indexOf(leaf), 1);
            if (graph.get(neighbor!)!.length === 1) {
                newLeaves.push(neighbor!);
            }
        }
        leaves = newLeaves;
    }

    return leaves;
};

console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]));