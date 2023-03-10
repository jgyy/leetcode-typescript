/**
 * Definition for a binary tree node.
 */
class TreeNode100 {
    val: number
    left: TreeNode100 | null
    right: TreeNode100 | null
    constructor(val?: number, left?: TreeNode100 | null, right?: TreeNode100 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function isSameTree(p: TreeNode100 | null, q: TreeNode100 | null): boolean {
    if (p == null && q == null) {
        return true;
    }
    if (p == null || q == null) {
        return false;
    }
    if (p.val != q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const root100 = new TreeNode100(1);
root100.left = new TreeNode100(2);
root100.right = new TreeNode100(3);
const root2 = new TreeNode100(1);
root2.left = new TreeNode100(2);
root2.right = new TreeNode100(3);
console.log(isSameTree(root100, root2));