function findItinerary(tickets: string[][]): string[] {
    const graph = new Map<string, string[]>();
    for (const [from, to] of tickets) {
        if (!graph.has(from)) {
            graph.set(from, []);
        }
        graph.get(from)!.push(to);
    }
    for (const [from, to] of graph) {
        to.sort();
    }
    const res: string[] = [];
    const dfs = (from: string) => {
        const to = graph.get(from);
        while (to && to.length) {
            dfs(to.shift()!);
        }
        res.unshift(from);
    };
    dfs('JFK');
    return res;
};

console.log(findItinerary([["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]]));