/**
 * Definition for a binary tree node.
 */
class TreeNode285 {
    val: number
    left: TreeNode285 | null
    right: TreeNode285 | null
    constructor(val?: number, left?: TreeNode285 | null, right?: TreeNode285 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function inorderSuccessor(root: TreeNode285 | null, p: TreeNode285 | null): TreeNode285 | null {
    const stack: TreeNode285[] = [];
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

const root285 = new TreeNode285(2);
root285.left = new TreeNode285(1);
root285.right = new TreeNode285(3);
console.log(inorderSuccessor(root285, root285.left)); // 2
