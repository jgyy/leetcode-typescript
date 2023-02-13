/**
 * Definition for a binary tree node.
 */
class TreeNode124 {
    val: number
    left: TreeNode124 | null
    right: TreeNode124 | null
    constructor(val?: number, left?: TreeNode124 | null, right?: TreeNode124 | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function maxPathSum(root: TreeNode124 | null): number {
    let maxSum = Number.MIN_SAFE_INTEGER;
    const maxGain = (node: TreeNode124 | null): number => {
        if (node === null) {
            return 0;
        }
        let leftGain = Math.max(maxGain(node.left), 0);
        let rightGain = Math.max(maxGain(node.right), 0);
        let priceNewPath = node.val + leftGain + rightGain;
        maxSum = Math.max(maxSum, priceNewPath);
        return node.val + Math.max(leftGain, rightGain);
    };
    maxGain(root);
    return maxSum;
};

const root124 = new TreeNode124();
root124.val = 1;
root124.left = new TreeNode124();
root124.left.val = 2;
root124.right = new TreeNode124();
root124.right.val = 3;
console.log(maxPathSum(root124));
