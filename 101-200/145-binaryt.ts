/**
 * Definition for a binary tree node.
 */
class TreeNode145 {
    val: number
    left: TreeNode145 | null
    right: TreeNode145 | null
    constructor(val?: number, left?: TreeNode145 | null, right?: TreeNode145 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function postorderTraversal(root: TreeNode145 | null): number[] {
    if (root === null) {
        return [];
    }
    const stack: TreeNode145[] = [root];
    const result: number[] = [];
    while (stack.length > 0) {
        const node = stack.pop()!;
        result.unshift(node.val);
        if (node.left !== null) {
            stack.push(node.left);
        }
        if (node.right !== null) {
            stack.push(node.right);
        }
    }
    return result;
};

const root145 = new TreeNode145(1);
root145.right = new TreeNode145(2);
root145.right.left = new TreeNode145(3);
console.log(postorderTraversal(root145));
