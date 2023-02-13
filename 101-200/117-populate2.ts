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

const root117 = new Node();
root117.val = 1;
root117.left = new Node();
root117.left.val = 2;
root117.right = new Node();
root117.right.val = 3;
root117.left.left = new Node();
root117.left.left.val = 4;
root117.left.right = new Node();
root117.left.right.val = 5;
root117.right.left = new Node();
root117.right.left.val = 6;
root117.right.right = new Node();
root117.right.right.val = 7;
console.log(connect(root117));