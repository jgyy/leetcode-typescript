/**
 * Definition for a binary tree node.
 */
class TreeNode333 {
    val: number
    left: TreeNode333 | null
    right: TreeNode333 | null
    constructor(val?: number, left?: TreeNode333 | null, right?: TreeNode333 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function largestBSTSubtree(root: TreeNode333 | null): number {
    const dfs = (node: TreeNode333 | null): [number, number, number] => {
        if (!node) {
            return [0, Infinity, -Infinity];
        }
        const [leftSize, leftMin, leftMax] = dfs(node.left);
        const [rightSize, rightMin, rightMax] = dfs(node.right);
        if (leftSize === -1 || rightSize === -1 || node.val <= leftMax || node.val >= rightMin) {
            return [-1, 0, 0];
        }
        const size = leftSize + rightSize + 1;
        const min = Math.min(node.val, leftMin);
        const max = Math.max(node.val, rightMax);
        return [size, min, max];
    };
    let max = 0;
    const dfs2 = (node: TreeNode333 | null): void => {
        if (!node) {
            return;
        }
        const [size, ,] = dfs(node);
        max = Math.max(max, size);
        dfs2(node.left);
        dfs2(node.right);
    };
    dfs2(root);
    return max;
};

const root333 = new TreeNode333(10);
root333.left = new TreeNode333(5);
root333.right = new TreeNode333(15);
root333.right.left = new TreeNode333(6);
root333.right.right = new TreeNode333(20);
console.log(largestBSTSubtree(root333));
