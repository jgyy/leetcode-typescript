/**
 * Definition for a binary tree node.
 */
class TreeNode112 {
    val: number
    left: TreeNode112 | null
    right: TreeNode112 | null
    constructor(val?: number, left?: TreeNode112 | null, right?: TreeNode112 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function hasPathSum(root: TreeNode112 | null, targetSum: number): boolean {
    if (root === null) {
        return false;
    }
    if (root.left === null && root.right === null) {
        return root.val === targetSum;
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

const root112 = new TreeNode112();
root112.val = 5;
root112.left = new TreeNode112();
root112.left.val = 4;
root112.left.left = new TreeNode112();
root112.left.left.val = 11;
root112.left.left.left = new TreeNode112();
root112.left.left.left.val = 7;
root112.left.left.right = new TreeNode112();
root112.left.left.right.val = 2;
root112.right = new TreeNode112();
root112.right.val = 8;
root112.right.left = new TreeNode112();
root112.right.left.val = 13;
root112.right.right = new TreeNode112();
root112.right.right.val = 4;
root112.right.right.right = new TreeNode112();
root112.right.right.right.val = 1;
console.log(hasPathSum(root112, 22));
