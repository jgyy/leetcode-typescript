/**
 * Definition for node429.
 */
class Node429 {
    val: number
    children: Node429[]
    constructor(val?: number) {
        this.val = (val === undefined ? 0 : val)
        this.children = []
    }
}

function levelOrder(root: Node429 | null): number[][] {
    const result: number[][] = [];
    if (root === null) {
        return result;
    }
    const queue: Node429[] = [root];
    while (queue.length > 0) {
        const level: number[] = [];
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node429 = queue.shift();
            level.push(node429!.val);
            for (const child of node429!.children) {
                queue.push(child);
            }
        }
        result.push(level);
    }
    return result;
};

const root = new Node429(1);
root.children.push(new Node429(3));
root.children.push(new Node429(2));
root.children.push(new Node429(4));
root.children[0].children.push(new Node429(5));
root.children[0].children.push(new Node429(6));
console.log(levelOrder(root));
