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

function verticalOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }
    const map = new Map<number, number[]>();
    const queue: [TreeNode, number][] = [[root, 0]];
    while (queue.length) {
        const [node, index] = queue.shift()!;
        if (map.has(index)) {
            map.get(index)!.push(node.val);
        } else {
            map.set(index, [node.val]);
        }
        if (node.left) {
            queue.push([node.left, index - 1]);
        }
        if (node.right) {
            queue.push([node.right, index + 1]);
        }
    }
    return [...map.entries()].sort(([a], [b]) => a - b).map(([, v]) => v);
};

const root = new TreeNode();
root.val = 3;
root.left = new TreeNode();
root.left.val = 9;
root.right = new TreeNode();
root.right.val = 20;
root.right.left = new TreeNode();
root.right.left.val = 15;
root.right.right = new TreeNode();
root.right.right.val = 7;
console.log(verticalOrder(root));
