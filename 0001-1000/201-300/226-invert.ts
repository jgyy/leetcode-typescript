/**
 * Definition for a binary tree node.
 */
class TreeNode226 {
    val: number
    left: TreeNode226 | null
    right: TreeNode226 | null
    constructor(val?: number, left?: TreeNode226 | null, right?: TreeNode226 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function invertTree(root: TreeNode226 | null): TreeNode226 | null {
    if (root === null) {
        return null;
    }
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

const root226 = new TreeNode226(4);
root226.left = new TreeNode226(2);
root226.right = new TreeNode226(7);
root226.left.left = new TreeNode226(1);
root226.left.right = new TreeNode226(3);
root226.right.left = new TreeNode226(6);
root226.right.right = new TreeNode226(9);
console.log(invertTree(root226));
