/**
 * Definition for Node117.
 */
class Node117 {
    val: number
    left: Node117 | null
    right: Node117 | null
    next: Node117 | null
    constructor(val?: number, left?: Node117, right?: Node117, next?: Node117) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
        this.next = (next === undefined ? null : next)
    }
}

function connect(root: Node117 | null): Node117 | null {
    if (root === null) {
        return null;
    }
    let queue: Node117[] = [root];
    while (queue.length > 0) {
        let levelLength = queue.length;
        for (let i = 0; i < levelLength; i++) {
            let node117 = queue.shift()!;
            if (i < levelLength - 1) {
                node117.next = queue[0];
            }
            if (node117.left !== null) {
                queue.push(node117.left);
            }
            if (node117.right !== null) {
                queue.push(node117.right);
            }
        }
    }
    return root;
};

const root117 = new Node117();
root117.val = 1;
root117.left = new Node117();
root117.left.val = 2;
root117.right = new Node117();
root117.right.val = 3;
root117.left.left = new Node117();
root117.left.left.val = 4;
root117.left.right = new Node117();
root117.left.right.val = 5;
root117.right.left = new Node117();
root117.right.left.val = 6;
root117.right.right = new Node117();
root117.right.right.val = 7;
console.log(connect(root117));