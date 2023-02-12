/**
 * Definition for a binary tree node.
 */
class TreeNode101 {
    val: number
    left: TreeNode101 | null
    right: TreeNode101 | null
    constructor(val?: number, left?: TreeNode101 | null, right?: TreeNode101 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function isSymmetric(root: TreeNode101 | null): boolean {
    if (root === null) {
        return true;
    }
    const isMirror = (t1: TreeNode101 | null, t2: TreeNode101 | null): boolean => {
        if (t1 === null && t2 === null) {
            return true;
        }
        if (t1 === null || t2 === null) {
            return false;
        }
        return (t1.val === t2.val)
            && isMirror(t1.right, t2.left)
            && isMirror(t1.left, t2.right);
    }
    return isMirror(root.left, root.right);
};

const root1 = new TreeNode101(1);
root1.left = new TreeNode101(2);
root1.right = new TreeNode101(2);
root1.left.left = new TreeNode101(3);
root1.left.right = new TreeNode101(4);
root1.right.left = new TreeNode101(4);
root1.right.right = new TreeNode101(3);
console.log(isSymmetric(root1));