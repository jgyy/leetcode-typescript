/**
 * Definition for a binary tree node.
 */
class TreeNode222 {
    val: number
    left: TreeNode222 | null
    right: TreeNode222 | null
    constructor(val?: number, left?: TreeNode222 | null, right?: TreeNode222 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function countNodes(root: TreeNode222 | null): number {
    if (root === null) {
        return 0;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
};

const root222 = new TreeNode222(1);
root222.left = new TreeNode222(2);
root222.right = new TreeNode222(3);
root222.left.left = new TreeNode222(4);
root222.left.right = new TreeNode222(5);
root222.right.left = new TreeNode222(6);
root222.right.right = new TreeNode222(7);
console.log(countNodes(root222));
