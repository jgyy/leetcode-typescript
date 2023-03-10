/**
 * Definition for a binary tree node.
 */
type T = TreeNode235 | null;

class TreeNode235 {
    val: number;
    left: T;
    right: T;
    constructor(val?: number, left?: T, right?: T) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function lowestCommonAncestor235(root: T, p: T, q: T): T {
    if (root === null) {
        return null;
    }
    if (root === p || root === q) {
        return root;
    }
    const left = lowestCommonAncestor235(root.left, p, q);
    const right = lowestCommonAncestor235(root.right, p, q);
    if (left !== null && right !== null) {
        return root;
    }
    if (left === null && right === null) {
        return null;
    }
    return left === null ? right : left;
};

const root235 = new TreeNode235(3);
root235.left = new TreeNode235(5);
root235.right = new TreeNode235(1);
root235.left.left = new TreeNode235(6);
root235.left.right = new TreeNode235(2);
root235.left.right.left = new TreeNode235(7);
root235.left.right.right = new TreeNode235(4);
root235.right.left = new TreeNode235(0);
root235.right.right = new TreeNode235(8);
console.log(lowestCommonAncestor235(root235, root235.left, root235.left.right.right));
