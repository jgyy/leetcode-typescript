/**
 * Definition for a binary tree node.
 */
class TreeNode99 {
    val: number
    left: TreeNode99 | null
    right: TreeNode99 | null
    constructor(val?: number, left?: TreeNode99 | null, right?: TreeNode99 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

/**
 Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode99 | null): void {
    let x: TreeNode99 | null = null;
    let y: TreeNode99 | null = null;
    let pred: TreeNode99 | null = null;
    let stack: TreeNode99[] = [];
    while (stack.length > 0 || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop()!;
        if (pred !== null && root.val < pred.val) {
            y = root;
            if (x === null) {
                x = pred;
            } else {
                break;
            }
        }
        pred = root;
        root = root.right;
    }
    let temp = x!.val;
    x!.val = y!.val;
    y!.val = temp;
    console.log(root);
};

const root9 = new TreeNode99(1);
root9.left = new TreeNode99(3);
root9.left.right = new TreeNode99(2);
recoverTree(root9);
const root10 = new TreeNode99(3);
root10.left = new TreeNode99(1);
root10.right = new TreeNode99(4);
root10.right.left = new TreeNode99(2);
recoverTree(root10);
