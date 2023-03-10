/**
 * Definition for a binary tree node.
 */
class TreeNode337 {
    val: number
    left: TreeNode337 | null
    right: TreeNode337 | null
    constructor(val?: number, left?: TreeNode337 | null, right?: TreeNode337 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function rob(root: TreeNode337 | null): number {
    const dfs = (node: TreeNode337 | null): number[] => {
        if (node === null) return [0, 0];
        let left = dfs(node.left), right = dfs(node.right);
        return [node.val + left[1] + right[1], Math.max(left[0], left[1]) + Math.max(right[0], right[1])];
    };
    let res = dfs(root);
    return Math.max(res[0], res[1]);
};

const root337 = new TreeNode337();
root337.val = 3;
root337.left = new TreeNode337();
root337.left.val = 2;
root337.left.right = new TreeNode337();
root337.left.right.val = 3;
root337.right = new TreeNode337();
root337.right.val = 3;
root337.right.right = new TreeNode337();
root337.right.right.val = 1;
console.log(rob(root337));
