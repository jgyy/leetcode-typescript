/**
 * Definition for Node.
 */
class Node {
    val: number
    left: Node | null
    right: Node | null
    next: Node | null
    constructor(val?: number, left?: Node, right?: Node, next?: Node) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
        this.next = (next === undefined ? null : next)
    }
}

function connect(root: Node | null): Node | null {
    if (root === null) {
        return null;
    }
    let queue: Node[] = [root];
    while (queue.length > 0) {
        let levelLength = queue.length;
        for (let i = 0; i < levelLength; i++) {
            let node = queue.shift()!;
            if (i < levelLength - 1) {
                node.next = queue[0];
            }
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }
    return root;
};

const root = new Node();
root.val = 1;
root.left = new Node();
root.left.val = 2;
root.right = new Node();
root.right.val = 3;
root.left.left = new Node();
root.left.left.val = 4;
root.left.right = new Node();
root.left.right.val = 5;
root.right.left = new Node();
root.right.left.val = 6;
root.right.right = new Node();
root.right.right.val = 7;
console.log(connect(root));