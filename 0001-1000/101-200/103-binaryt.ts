/**
 * Definition for a binary tree node.
 */
class TreeNode103 {
    val: number
    left: TreeNode103 | null
    right: TreeNode103 | null
    constructor(val?: number, left?: TreeNode103 | null, right?: TreeNode103 | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function zigzagLevelOrder(root: TreeNode103 | null): number[][] {
    if (root === null) {
        return [];
    }
    let result: number[][] = [];
    let queue: TreeNode103[] = [root];
    let level = 0;
    while (queue.length > 0) {
        let levelLength = queue.length;
        result.push([]);
        for (let i = 0; i < levelLength; i++) {
            let node = queue.shift()!;
            if (level % 2 === 0) {
                result[level].push(node.val);
            } else {
                result[level].unshift(node.val);
            }
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        level++;
    }
    return result;
};

const root103 = new TreeNode103(3);
root103.left = new TreeNode103(9);
root103.right = new TreeNode103(20);
root103.right.left = new TreeNode103(15);
root103.right.right = new TreeNode103(7);
console.log(zigzagLevelOrder(root103));
