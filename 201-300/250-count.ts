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

function countUnivalSubtrees(root: TreeNode | null): number {
    let count = 0;
    const traverse = (node: TreeNode | null): boolean => {
        if (node === null) {
            return true;
        }
        const left = traverse(node.left);
        const right = traverse(node.right);
        if (left && right) {
            if (node.left !== null && node.left.val !== node.val) {
                return false;
            }
            if (node.right !== null && node.right.val !== node.val) {
                return false;
            }
            count++;
            return true;
        }
        return false;
    };
    traverse(root);
    return count;
};

const root = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(5);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(5);
console.log(countUnivalSubtrees(root));
