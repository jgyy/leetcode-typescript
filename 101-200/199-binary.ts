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

function rightSideView(root: TreeNode | null): number[] {
    if (root === null) {
        return [];
    }
    const result: number[] = [];
    const queue: TreeNode[] = [];
    queue.push(root);
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift()!;
            if (i === size - 1) {
                result.push(node.val);
            }
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }
    return result;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);
console.log(rightSideView(root));
