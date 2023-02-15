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

function upsideDownBinaryTree(root: TreeNode | null): TreeNode | null {
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

const root = new TreeNode();
root.val = 1;
root.left = new TreeNode();
root.left.val = 2;
root.left.left = new TreeNode();
root.left.left.val = 3;
root.left.right = new TreeNode();
root.left.right.val = 4;
root.right = new TreeNode();
root.right.val = 5;
root.right.left = new TreeNode();
root.right.left.val = 6;
console.log(upsideDownBinaryTree(root));
