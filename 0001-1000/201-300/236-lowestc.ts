/**
 * Definition for a binary tree node.
 */
class TreeNode236 {
    val: number
    left: TreeNode236 | null
    right: TreeNode236 | null
    constructor(val?: number, left?: TreeNode236 | null, right?: TreeNode236 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function lowestCommonAncestor(
    root: TreeNode236 | null, p: TreeNode236 | null, q: TreeNode236 | null
): TreeNode236 | null {
    if (root === null || root === p || root === q) {
        return root;
    }
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left === null) {
        return right;
    }
    if (right === null) {
        return left;
    }
    return root;
};

const root236 = new TreeNode236(3);
root236.left = new TreeNode236(5);
root236.right = new TreeNode236(1);
root236.left.left = new TreeNode236(6);
root236.left.right = new TreeNode236(2);
root236.left.right.left = new TreeNode236(7);
root236.left.right.right = new TreeNode236(4);
root236.right.left = new TreeNode236(0);
root236.right.right = new TreeNode236(8);
console.log(lowestCommonAncestor(root236, root236.left, root236.left.right.right));
