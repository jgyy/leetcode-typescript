/**
 * Definition for a binary tree node.
 */
class TreeNode104 {
    val: number
    left: TreeNode104 | null
    right: TreeNode104 | null
    constructor(val?: number, left?: TreeNode104 | null, right?: TreeNode104 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function maxDepth(root: TreeNode104 | null): number {
    if (root === null) {
        return 0;
    }
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
};

const root104 = new TreeNode104(3);
root104.left = new TreeNode104(9);
root104.right = new TreeNode104(20);
root104.right.left = new TreeNode104(15);
root104.right.right = new TreeNode104(7);
console.log(maxDepth(root104));