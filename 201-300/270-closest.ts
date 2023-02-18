/**
 * Definition for a binary tree node.
 */
class TreeNode270 {
    val: number
    left: TreeNode270 | null
    right: TreeNode270 | null
    constructor(val?: number, left?: TreeNode270 | null, right?: TreeNode270 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function closestValue(root: TreeNode270 | null, target: number): number {
    let closest = root!.val;
    while (root) {
        if (Math.abs(root.val - target) < Math.abs(closest - target)) {
            closest = root.val;
        }
        root = root.val > target ? root.left : root.right;
    }
    return closest;
};

const root270 = new TreeNode270();
root270.val = 4;
root270.left = new TreeNode270();
root270.left.val = 2;
root270.left.left = new TreeNode270();
root270.left.left.val = 1;
root270.left.right = new TreeNode270();
root270.left.right.val = 3;
root270.right = new TreeNode270();
root270.right.val = 5;
console.log(closestValue(root270, 3.714286));
