/**
 * Definition for a binary tree node.
 */
class TreeNode298 {
    val: number
    left: TreeNode298 | null
    right: TreeNode298 | null
    constructor(val?: number, left?: TreeNode298 | null, right?: TreeNode298 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function longestConsecutive(root: TreeNode298 | null): number {
    let max = 0;
    const dfs = (node: TreeNode298 | null, parent: TreeNode298 | null, length: number) => {
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

const root298 = new TreeNode298(1);
root298.left = new TreeNode298(2);
root298.right = new TreeNode298(3);
root298.left.left = new TreeNode298(4);
root298.left.right = new TreeNode298(5);
root298.right.right = new TreeNode298(6);
root298.left.right.left = new TreeNode298(7);
root298.left.right.right = new TreeNode298(8);
root298.left.right.right.right = new TreeNode298(9);
console.log(longestConsecutive(root298)); // 4
