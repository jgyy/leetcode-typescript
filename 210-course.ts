function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const edges: number[][] = new Array(numCourses).fill(0).map(() => []);
    const indeg: number[] = new Array(numCourses).fill(0);
    for (const info of prerequisites) {
        edges[info[1]].push(info[0]);
        ++indeg[info[0]];
    }
    const queue: number[] = [];
    for (let i = 0; i < numCourses; ++i) {
        if (indeg[i] === 0) {
            queue.push(i);
        }
    }
    const result: number[] = [];
    while (queue.length) {
        const u = queue.shift()!;
        result.push(u);
        for (const v of edges[u]) {
            --indeg[v];
            if (indeg[v] === 0) {
                queue.push(v);
            }
        }
    }
    return result.length === numCourses ? result : [];
};

console.log(findOrder(2, [[1, 0]]));