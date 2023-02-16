/**
 * Definition for a binary tree node.
 */
class TreeNode156 {
    val: number
    left: TreeNode156 | null
    right: TreeNode156 | null
    constructor(val?: number, left?: TreeNode156 | null, right?: TreeNode156 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function upsideDownBinaryTree(root: TreeNode156 | null): TreeNode156 | null {
    if (root === null || root.left === null) {
        return root;
    }
    const newRoot = upsideDownBinaryTree(root.left);
    root.left.left = root.right;
    root.left.right = root;
    root.left = null;
    root.right = null;
    return newRoot;
};

const root156 = new TreeNode156();
root156.val = 1;
root156.left = new TreeNode156();
root156.left.val = 2;
root156.left.left = new TreeNode156();
root156.left.left.val = 3;
root156.left.right = new TreeNode156();
root156.left.right.val = 4;
root156.right = new TreeNode156();
root156.right.val = 5;
root156.right.left = new TreeNode156();
root156.right.left.val = 6;
console.log(upsideDownBinaryTree(root156));
