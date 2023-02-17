/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function kthSmallest(root: TreeNode | null, k: number): number {
    const stack: TreeNode[] = [];
    let node = root;
    while (node !== null || stack.length > 0) {
        while (node !== null) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop()!;
        if (--k === 0) {
            return node.val;
        }
        node = node.right;
    }
    return 0;
};

const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);
console.log(kthSmallest(root, 1));
console.log(kthSmallest(root, 2));
console.log(kthSmallest(root, 3));
