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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    if (root === null) {
        return;
    }
    flatten(root.left);
    flatten(root.right);
    let left = root.left;
    let right = root.right;
    root.left = null;
    root.right = left;
    let p = root;
    while (p.right !== null) {
        p = p.right;
    }
    p.right = right;
    console.log(root);
};

const root114 = new TreeNode(1);
root114.left = new TreeNode(2);
root114.left.left = new TreeNode(3);
root114.left.right = new TreeNode(4);
root114.right = new TreeNode(5);
root114.right.right = new TreeNode(6);
flatten(root114);
