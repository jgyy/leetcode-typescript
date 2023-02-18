/**
 * Definition for a binary tree node.
 */
class TreeNode250 {
    val: number
    left: TreeNode250 | null
    right: TreeNode250 | null
    constructor(val?: number, left?: TreeNode250 | null, right?: TreeNode250 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function countUnivalSubtrees(root: TreeNode250 | null): number {
    let count = 0;
    const traverse = (node: TreeNode250 | null): boolean => {
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

const root250 = new TreeNode250(5);
root250.left = new TreeNode250(1);
root250.right = new TreeNode250(5);
root250.left.left = new TreeNode250(5);
root250.left.right = new TreeNode250(5);
root250.right.right = new TreeNode250(5);
console.log(countUnivalSubtrees(root250));
