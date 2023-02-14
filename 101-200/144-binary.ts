/**
 * Definition for a binary tree node.
 */
class TreeNode144 {
    val: number
    left: TreeNode144 | null
    right: TreeNode144 | null
    constructor(val?: number, left?: TreeNode144 | null, right?: TreeNode144 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function preorderTraversal(root: TreeNode144 | null): number[] {
    const result: number[] = [];
    const stack: TreeNode144[] = [];
    if (root !== null) {
        stack.push(root);
    }
    while (stack.length > 0) {
        const node = stack.pop()!;
        result.push(node.val);
        if (node.right !== null) {
            stack.push(node.right);
        }
        if (node.left !== null) {
            stack.push(node.left);
        }
    }
    return result;
};

const root144 = new TreeNode144(1);
root144.right = new TreeNode144(2);
root144.right.left = new TreeNode144(3);
console.log(preorderTraversal(root144));
