/**
 * Definition for a binary tree node.
 */
class TreeNode230 {
    val: number
    left: TreeNode230 | null
    right: TreeNode230 | null
    constructor(val?: number, left?: TreeNode230 | null, right?: TreeNode230 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function kthSmallest(root: TreeNode230 | null, k: number): number {
    const stack: TreeNode230[] = [];
    let node = root;
    while (node !== null || stack.length > 0) {
        while (node !== null) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop()!;
        if (--k === 0) {
            return node.val;
        }
        node = node.right;
    }
    return 0;
};

const root230 = new TreeNode230(3);
root230.left = new TreeNode230(1);
root230.right = new TreeNode230(4);
root230.left.right = new TreeNode230(2);
console.log(kthSmallest(root230, 1));
console.log(kthSmallest(root230, 2));
console.log(kthSmallest(root230, 3));
