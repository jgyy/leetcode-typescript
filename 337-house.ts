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

function rob(root: TreeNode | null): number {
    const dfs = (node: TreeNode | null): number[] => {
        if (node === null) return [0, 0];
        let left = dfs(node.left), right = dfs(node.right);
        return [node.val + left[1] + right[1], Math.max(left[0], left[1]) + Math.max(right[0], right[1])];
    };
    let res = dfs(root);
    return Math.max(res[0], res[1]);
};

const root = new TreeNode();
root.val = 3;
root.left = new TreeNode();
root.left.val = 2;
root.left.right = new TreeNode();
root.left.right.val = 3;
root.right = new TreeNode();
root.right.val = 3;
root.right.right = new TreeNode();
root.right.right.val = 1;
console.log(rob(root));
