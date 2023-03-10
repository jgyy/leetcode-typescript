/**
 * Definition for a binary tree node426.
 */
class Node426 {
    val: number
    left: Node426 | null
    right: Node426 | null
    constructor(val?: number, left?: Node426 | null, right?: Node426 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function treeToDoublyList(root: Node426 | null): Node426 | null {
    if (!root) { return null; }
    let head: Node426 | null = null;
    let prev: Node426 | null = null;
    const dfs = (node426: Node426 | null) => {
        if (!node426) { return; }
        dfs(node426.left);
        if (prev) {
            prev.right = node426;
            node426.left = prev;
        } else {
            head = node426;
        }
        prev = node426;
        dfs(node426.right);
    }
    dfs(root);
    prev!.right = head;
    head!.left = prev;
    return head;
};

const node426 = new Node426();
node426.val = 4;
node426.left = new Node426();
node426.left.val = 2;
node426.left.left = new Node426();
node426.left.left.val = 1;
node426.left.right = new Node426();
node426.left.right.val = 3;
node426.right = new Node426();
node426.right.val = 5;
console.log(treeToDoublyList(node426));
