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

function isBalanced(root: TreeNode | null): boolean {
    const dfs = (node: TreeNode | null): number => {
        if (node === null) {
            return 0;
        }
        let left = dfs(node.left);
        if (left === -1) {
            return -1;
        }
        let right = dfs(node.right);
        if (right === -1) {
            return -1;
        }
        return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
    }
    return dfs(root) !== -1;
};

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(isBalanced(root));
