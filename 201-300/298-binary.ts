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

function longestConsecutive(root: TreeNode | null): number {
    let max = 0;
    const dfs = (node: TreeNode | null, parent: TreeNode | null, length: number) => {
        if (node === null) {
            return;
        }
        length = (parent !== null && parent.val + 1 === node.val) ? length + 1 : 1;
        max = Math.max(max, length);
        dfs(node.left, node, length);
        dfs(node.right, node, length);
    };
    dfs(root, null, 0);
    return max;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(8);
root.left.right.right.right = new TreeNode(9);
console.log(longestConsecutive(root)); // 4
