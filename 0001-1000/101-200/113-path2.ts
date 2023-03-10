/**
 * Definition for a binary tree node.
 */
class TreeNode113 {
    val: number
    left: TreeNode113 | null
    right: TreeNode113 | null
    constructor(val?: number, left?: TreeNode113 | null, right?: TreeNode113 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function pathSum(root: TreeNode113 | null, targetSum: number): number[][] {
    if (root === null) {
        return [];
    }
    let result: number[][] = [];
    let queue: [TreeNode113, number, number[]][] = [[root, 0, []]];
    while (queue.length > 0) {
        let [node, sum, path] = queue.shift()!;
        sum += node.val;
        path.push(node.val);
        if (node.left === null && node.right === null) {
            if (sum === targetSum) {
                result.push(path);
            }
        }
        if (node.left !== null) {
            queue.push([node.left, sum, path.slice()]);
        }
        if (node.right !== null) {
            queue.push([node.right, sum, path.slice()]);
        }
    }
    return result;
};

const root113 = new TreeNode113(5);
root113.left = new TreeNode113(4);
root113.right = new TreeNode113(8);
root113.left.left = new TreeNode113(11);
root113.left.left.left = new TreeNode113(7);
root113.left.left.right = new TreeNode113(2);
root113.right.left = new TreeNode113(13);
root113.right.right = new TreeNode113(4);
root113.right.right.left = new TreeNode113(5);
root113.right.right.right = new TreeNode113(1);
console.log(pathSum(root113, 22));
