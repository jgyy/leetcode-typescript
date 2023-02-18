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

function binaryTreePaths(root: TreeNode | null): string[] {
    const result: string[] = [];
    const traverse = (node: TreeNode | null, path: string) => {
        if (node === null) {
            return;
        }
        path += node.val;
        if (node.left === null && node.right === null) {
            result.push(path);
            return;
        }
        path += '->';
        traverse(node.left, path);
        traverse(node.right, path);
    };
    traverse(root, '');
    return result;
};

const root = new TreeNode();
root.val = 1;
root.left = new TreeNode();
root.left.val = 2;
root.left.right = new TreeNode();
root.left.right.val = 5;
root.right = new TreeNode();
root.right.val = 3;
console.log(binaryTreePaths(root));
