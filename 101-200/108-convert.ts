/**
 * Definition for a binary tree node.
 */
class TreeNode108 {
    val: number
    left: TreeNode108 | null
    right: TreeNode108 | null
    constructor(val?: number, left?: TreeNode108 | null, right?: TreeNode108 | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function sortedArrayToBST(nums: number[]): TreeNode108 | null {
    if (nums.length === 0) {
        return null;
    }
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode108(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;
};

console.log(sortedArrayToBST([-10,-3,0,5,9]));