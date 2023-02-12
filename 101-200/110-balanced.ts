/**
 * Definition for a binary tree node.
 */
class TreeNode110 {
    val: number
    left: TreeNode110 | null
    right: TreeNode110 | null
    constructor(val?: number, left?: TreeNode110 | null, right?: TreeNode110 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function isBalanced(root: TreeNode110 | null): boolean {
    const dfs = (node: TreeNode110 | null): number => {
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

const root110 = new TreeNode110(3);
root110.left = new TreeNode110(9);
root110.right = new TreeNode110(20);
root110.right.left = new TreeNode110(15);
root110.right.right = new TreeNode110(7);
console.log(isBalanced(root110));
