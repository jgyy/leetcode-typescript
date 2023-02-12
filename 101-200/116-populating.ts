/**
 * Definition for Node116.
 */
class Node116 {
    val: number
    left: Node116 | null
    right: Node116 | null
    next: Node116 | null
    constructor(val?: number, left?: Node116, right?: Node116, next?: Node116) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
        this.next = (next === undefined ? null : next)
    }
}

function connect(root: Node116 | null): Node116 | null {
    if (root === null) {
        return null;
    }
    let queue: Node116[] = [root];
    while (queue.length > 0) {
        let levelLength = queue.length;
        for (let i = 0; i < levelLength; i++) {
            let node116 = queue.shift()!;
            if (i < levelLength - 1) {
                node116.next = queue[0];
            }
            if (node116.left !== null) {
                queue.push(node116.left);
            }
            if (node116.right !== null) {
                queue.push(node116.right);
            }
        }
    }
    return root;
};

const root116 = new Node116();
root116.val = 1;
root116.left = new Node116();
root116.left.val = 2;
root116.right = new Node116();
root116.right.val = 3;
root116.left.left = new Node116();
root116.left.left.val = 4;
root116.left.right = new Node116();
root116.left.right.val = 5;
root116.right.left = new Node116();
root116.right.left.val = 6;
root116.right.right = new Node116();
root116.right.right.val = 7;
console.log(connect(root116));
