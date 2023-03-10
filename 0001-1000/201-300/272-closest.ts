/**
 * Definition for a binary tree node.
 */
class TreeNode272 {
    val: number
    left: TreeNode272 | null
    right: TreeNode272 | null
    constructor(val?: number, left?: TreeNode272 | null, right?: TreeNode272 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function closestKValues(root: TreeNode272 | null, target: number, k: number): number[] {
    const result: number[] = [];
    const stack: TreeNode272[] = [];
    let node: TreeNode272 | null = root;
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

const root272 = new TreeNode272(4);
root272.left = new TreeNode272(2);
root272.right = new TreeNode272(5);
root272.left.left = new TreeNode272(1);
root272.left.right = new TreeNode272(3);
console.log(closestKValues(root272, 3.714286, 2)); // [4, 3]
