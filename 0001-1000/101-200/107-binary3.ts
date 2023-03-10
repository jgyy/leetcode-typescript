/**
 * Definition for a binary tree node.
 */
class TreeNode107 {
    val: number
    left: TreeNode107 | null
    right: TreeNode107 | null
    constructor(val?: number, left?: TreeNode107 | null, right?: TreeNode107 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function levelOrderBottom(root: TreeNode107 | null): number[][] {
    if (root === null) {
        return [];
    }
    let result: number[][] = [];
    let queue: TreeNode107[] = [root];
    while (queue.length > 0) {
        let levelLength = queue.length;
        result.unshift([]);
        for (let i = 0; i < levelLength; i++) {
            let node = queue.shift()!;
            result[0].push(node.val);
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

const root107 = new TreeNode107(3);
root107.left = new TreeNode107(9);
root107.right = new TreeNode107(20);
root107.right.left = new TreeNode107(15);
root107.right.right = new TreeNode107(7);
console.log(levelOrderBottom(root107));
