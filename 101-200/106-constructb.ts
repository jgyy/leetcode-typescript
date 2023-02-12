/**
 * Definition for a binary tree node.
 */
class TreeNode106 {
    val: number
    left: TreeNode106 | null
    right: TreeNode106 | null
    constructor(val?: number, left?: TreeNode106 | null, right?: TreeNode106 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function buildTree(inorder: number[], postorder: number[]): TreeNode106 | null {
    if (inorder.length === 0) {
        return null;
    }
    const rootValue = postorder[postorder.length - 1];
    const root = new TreeNode106(rootValue);
    const rootIndex = inorder.indexOf(rootValue);
    const leftInorder = inorder.slice(0, rootIndex);
    const rightInorder = inorder.slice(rootIndex + 1);
    const leftPostorder = postorder.slice(0, leftInorder.length);
    const rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1);
    root.left = buildTree(leftInorder, leftPostorder);
    root.right = buildTree(rightInorder, rightPostorder);
    return root;
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));