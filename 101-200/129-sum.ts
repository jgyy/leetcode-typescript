/**
 * Definition for a binary tree node.
 */
class TreeNode129 {
    val: number
    left: TreeNode129 | null
    right: TreeNode129 | null
    constructor(val?: number, left?: TreeNode129 | null, right?: TreeNode129 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function sumNumbers(root: TreeNode129 | null): number {
    if (root === null) {
        return 0;
    }
    const stack: [TreeNode129, number][] = [[root, root.val]];
    let sum = 0;
    while (stack.length > 0) {
        const [node, num] = stack.pop()!;
        if (node.left === null && node.right === null) {
            sum += num;
        }
        if (node.left !== null) {
            stack.push([node.left, num * 10 + node.left.val]);
        }
        if (node.right !== null) {
            stack.push([node.right, num * 10 + node.right.val]);
        }
    }
    return sum;
};

const root129 = new TreeNode129(4);
root129.left = new TreeNode129(9);
root129.right = new TreeNode129(0);
root129.left.left = new TreeNode129(5);
root129.left.right = new TreeNode129(1);
console.log(sumNumbers(root129));