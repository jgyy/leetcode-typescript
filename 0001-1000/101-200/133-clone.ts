/**
 * Definition for Node133.
 */
class Node133 {
    val: number
    neighbors: Node133[]
    constructor(val?: number, neighbors?: Node133[]) {
        this.val = (val === undefined ? 0 : val)
        this.neighbors = (neighbors === undefined ? [] : neighbors)
    }
}

function cloneGraph(node133: Node133 | null): Node133 | null {
    if (node133 === null) {
        return null;
    }
    const visited: Map<Node133, Node133> = new Map();
    const dfs = (node133: Node133): Node133 => {
        if (visited.has(node133)) {
            return visited.get(node133)!;
        }
        const cloneNode133 = new Node133(node133.val, []);
        visited.set(node133, cloneNode133);
        for (const neighbor of node133.neighbors) {
            cloneNode133.neighbors.push(dfs(neighbor));
        }
        return cloneNode133;
    };
    return dfs(node133);
};

const node133 = new Node133(1);
node133.neighbors = [new Node133(2), new Node133(3)];
node133.neighbors[0].neighbors = [new Node133(4), new Node133(5)];
node133.neighbors[1].neighbors = [new Node133(6), new Node133(7)];
console.log(cloneGraph(node133));
