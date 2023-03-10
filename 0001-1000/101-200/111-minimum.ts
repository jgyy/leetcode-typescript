/**
 * Definition for a binary tree node.
 */
class TreeNode111 {
    val: number
    left: TreeNode111 | null
    right: TreeNode111 | null
    constructor(val?: number, left?: TreeNode111 | null, right?: TreeNode111 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function minDepth(root: TreeNode111 | null): number {
    if (root === null) {
        return 0;
    }
    if (root.left === null && root.right === null) {
        return 1;
    }
    if (root.left === null) {
        return minDepth(root.right!) + 1;
    }
    if (root.right === null) {
        return minDepth(root.left!) + 1;
    }
    return Math.min(minDepth(root.left!), minDepth(root.right!)) + 1;
};

const root111 = new TreeNode111();
root111.val = 3;
root111.left = new TreeNode111();
root111.left.val = 9;
root111.right = new TreeNode111();
root111.right.val = 20;
root111.right.left = new TreeNode111();
root111.right.left.val = 15;
root111.right.right = new TreeNode111();
root111.right.right.val = 7;
console.log(minDepth(root111));
