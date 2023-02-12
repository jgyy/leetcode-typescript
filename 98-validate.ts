/**
 * Definition for a binary tree node.
 */
class TreeNode98 {
    val: number
    left: TreeNode98 | null
    right: TreeNode98 | null
    constructor(val?: number, left?: TreeNode98 | null, right?: TreeNode98 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function isValidBST(root: TreeNode98 | null): boolean {
    function validate(node: TreeNode98 | null, min: number, max: number): boolean {
        if (node == null) {
            return true;
        }
        if (node.val <= min || node.val >= max) {
            return false;
        }
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }
    return validate(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

const root98 = new TreeNode98(2);
root98.left = new TreeNode98(1);
root98.right = new TreeNode98(3);
console.log(isValidBST(root98));