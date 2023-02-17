/**
 * Definition for a binary tree node.
 */
class TreeNode199 {
    val: number
    left: TreeNode199 | null
    right: TreeNode199 | null
    constructor(val?: number, left?: TreeNode199 | null, right?: TreeNode199 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function rightSideView(root: TreeNode199 | null): number[] {
    if (root === null) {
        return [];
    }
    const result: number[] = [];
    const queue: TreeNode199[] = [];
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

const root199 = new TreeNode199(1);
root199.left = new TreeNode199(2);
root199.right = new TreeNode199(3);
root199.left.right = new TreeNode199(5);
root199.right.right = new TreeNode199(4);
console.log(rightSideView(root199));
