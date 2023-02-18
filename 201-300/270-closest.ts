/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function closestValue(root: TreeNode | null, target: number): number {
    let closest = root!.val;
    while (root) {
        if (Math.abs(root.val - target) < Math.abs(closest - target)) {
            closest = root.val;
        }
        root = root.val > target ? root.left : root.right;
    }
    return closest;
};

const root = new TreeNode();
root.val = 4;
root.left = new TreeNode();
root.left.val = 2;
root.left.left = new TreeNode();
root.left.left.val = 1;
root.left.right = new TreeNode();
root.left.right.val = 3;
root.right = new TreeNode();
root.right.val = 5;
console.log(closestValue(root, 3.714286));
