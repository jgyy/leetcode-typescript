/**
 * Definition for Node138.
 */
class Node138 {
    val: number
    neighbors: Node138[]
    constructor(val?: number, neighbors?: Node138[]) {
        this.val = (val === undefined ? 0 : val)
        this.neighbors = (neighbors === undefined ? [] : neighbors)
    }
}

function cloneGraph(node138: Node138 | null): Node138 | null {
    if (node138 === null) {
        return null;
    }
    const visited: Map<Node138, Node138> = new Map();
    const dfs = (node138: Node138): Node138 => {
        if (visited.has(node138)) {
            return visited.get(node138)!;
        }
        const cloneNode138 = new Node138(node138.val, []);
        visited.set(node138, cloneNode138);
        for (const neighbor of node138.neighbors) {
            cloneNode138.neighbors.push(dfs(neighbor));
        }
        return cloneNode138;
    };
    return dfs(node138);
};

const node138 = new Node138(1);
node138.neighbors = [new Node138(2), new Node138(3)];
node138.neighbors[0].neighbors = [new Node138(4), new Node138(5)];
node138.neighbors[1].neighbors = [new Node138(6), new Node138(7)];
console.log(cloneGraph(node138));
