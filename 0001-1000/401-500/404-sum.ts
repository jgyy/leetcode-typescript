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

function sumOfLeftLeaves(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    if (root.left !== null && root.left.left === null && root.left.right === null) {
        return root.left.val + sumOfLeftLeaves(root.right);
    }
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};

const root404 = new TreeNode(3);
root404.left = new TreeNode(9);
root404.right = new TreeNode(20);
root404.right.left = new TreeNode(15);
root404.right.right = new TreeNode(7);
console.log(sumOfLeftLeaves(root404));
