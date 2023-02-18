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

function inorderSuccessor(root: TreeNode | null, p: TreeNode | null): TreeNode | null {
    const stack: TreeNode[] = [];
    let inorder = Number.MIN_SAFE_INTEGER;
    while (stack.length > 0 || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop()!;
        if (inorder === p!.val) {
            return root;
        }
        inorder = root.val;
        root = root.right;
    }
    return null;
};

const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
console.log(inorderSuccessor(root, root.left)); // 2
