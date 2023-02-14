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

function postorderTraversal(root: TreeNode | null): number[] {
    if (root === null) {
        return [];
    }
    const stack: TreeNode[] = [root];
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

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
console.log(postorderTraversal(root));
