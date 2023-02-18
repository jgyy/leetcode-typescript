/**
 * Definition for a binary tree node.
 */
class TreeNode257 {
    val: number
    left: TreeNode257 | null
    right: TreeNode257 | null
    constructor(val?: number, left?: TreeNode257 | null, right?: TreeNode257 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function binaryTreePaths(root: TreeNode257 | null): string[] {
    const result: string[] = [];
    const traverse = (node: TreeNode257 | null, path: string) => {
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

const root257 = new TreeNode257();
root257.val = 1;
root257.left = new TreeNode257();
root257.left.val = 2;
root257.left.right = new TreeNode257();
root257.left.right.val = 5;
root257.right = new TreeNode257();
root257.right.val = 3;
console.log(binaryTreePaths(root257));
