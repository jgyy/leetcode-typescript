/**
 * Definition for a binary tree node.
 */
class TreeNode94 {
    val: number
    left: TreeNode94 | null
    right: TreeNode94 | null
    constructor(val?: number, left?: TreeNode94 | null, right?: TreeNode94 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function inorderTraversal(root: TreeNode94 | null): number[] {
    let ans: number[] = [];
    function helper(node: TreeNode94 | null) {
        if (node) {
            helper(node.left);
            ans.push(node.val);
            helper(node.right);
        }
    }
    helper(root);
    return ans;
};

const root94 = new TreeNode94(1, null, new TreeNode94(2, new TreeNode94(3)));
console.log(inorderTraversal(root94));