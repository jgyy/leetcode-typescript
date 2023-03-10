/**
 * Definition for a binary tree node.
 */
class TreeNode102 {
    val: number
    left: TreeNode102 | null
    right: TreeNode102 | null
    constructor(val?: number, left?: TreeNode102 | null, right?: TreeNode102 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function levelOrder(root: TreeNode102 | null): number[][] {
    if (root === null) {
        return [];
    }
    let result: number[][] = [];
    let queue: TreeNode102[] = [];
    queue.push(root);
    while (queue.length > 0) {
        let level: number[] = [];
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift()!;
            level.push(node.val);
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        result.push(level);
    }
    return result;
};

const root102 = new TreeNode102(3);
root102.left = new TreeNode102(9);
root102.right = new TreeNode102(20);
root102.right.left = new TreeNode102(15);
root102.right.right = new TreeNode102(7);
console.log(levelOrder(root102));
