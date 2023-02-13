/**
 * Definition for a binary tree node.
 */
class TreeNode114 {
    val: number
    left: TreeNode114 | null
    right: TreeNode114 | null
    constructor(val?: number, left?: TreeNode114 | null, right?: TreeNode114 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode114 | null): void {
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

const root114 = new TreeNode114(1);
root114.left = new TreeNode114(2);
root114.left.left = new TreeNode114(3);
root114.left.right = new TreeNode114(4);
root114.right = new TreeNode114(5);
root114.right.right = new TreeNode114(6);
flatten(root114);
