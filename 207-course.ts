function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const edges = new Array(numCourses).fill(0).map(() => new Array());
    const indeg = new Array(numCourses).fill(0);
    for (const info of prerequisites) {
        edges[info[1]].push(info[0]);
        indeg[info[0]]++;
    }
    const q = [];
    for (let i = 0; i < numCourses; i++) {
        if (indeg[i] === 0) {
            q.push(i);
        }
    }
    let visited = 0;
    while (q.length) {
        const u = q.shift();
        visited++;
        for (const v of edges[u!]) {
            indeg[v]--;
            if (indeg[v] === 0) {
                q.push(v);
            }
        }
    }
    return visited === numCourses;
};

console.log(canFinish(2, [[1, 0]]));