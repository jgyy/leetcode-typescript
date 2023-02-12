/**
 * Definition for a binary tree node.
 */
class TreeNode105 {
    val: number
    left: TreeNode105 | null
    right: TreeNode105 | null
    constructor(val?: number, left?: TreeNode105 | null, right?: TreeNode105 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function buildTree1(preorder: number[], inorder: number[]): TreeNode105 | null {
    if (preorder.length === 0) {
        return null;
    }
    let root = new TreeNode105(preorder[0]);
    let index = inorder.indexOf(preorder[0]);
    root.left = buildTree1(preorder.slice(1, index + 1), inorder.slice(0, index));
    root.right = buildTree1(preorder.slice(index + 1), inorder.slice(index + 1));
    return root;
};

console.log(buildTree1([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
