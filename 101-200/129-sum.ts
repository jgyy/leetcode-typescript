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

function sumNumbers(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    const stack: [TreeNode, number][] = [[root, root.val]];
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

const root = new TreeNode(4);
root.left = new TreeNode(9);
root.right = new TreeNode(0);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(1);
console.log(sumNumbers(root));