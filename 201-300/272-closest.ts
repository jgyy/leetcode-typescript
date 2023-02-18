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

function closestKValues(root: TreeNode | null, target: number, k: number): number[] {
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let node: TreeNode | null = root;
    while (node) {
        stack.push(node);
        node = node.left;
    }
    while (stack.length) {
        const curr = stack.pop()!;
        if (result.length < k) {
            result.push(curr.val);
        } else {
            if (Math.abs(result[0] - target) > Math.abs(curr.val - target)) {
                result.shift();
                result.push(curr.val);
            } else {
                break;
            }
        }
        if (curr.right) {
            let node = curr.right;
            while (node) {
                stack.push(node);
                node = node.left!;
            }
        }
    }
    return result;
};

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
console.log(closestKValues(root, 3.714286, 2)); // [4, 3]
