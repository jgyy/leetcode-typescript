/**
 * Definition for a binary tree node.
 */
class TreeNode314 {
    val: number
    left: TreeNode314 | null
    right: TreeNode314 | null
    constructor(val?: number, left?: TreeNode314 | null, right?: TreeNode314 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function verticalOrder(root: TreeNode314 | null): number[][] {
    if (!root) {
        return [];
    }
    const map = new Map<number, number[]>();
    const queue: [TreeNode314, number][] = [[root, 0]];
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

const root314 = new TreeNode314();
root314.val = 3;
root314.left = new TreeNode314();
root314.left.val = 9;
root314.right = new TreeNode314();
root314.right.val = 20;
root314.right.left = new TreeNode314();
root314.right.left.val = 15;
root314.right.right = new TreeNode314();
root314.right.right.val = 7;
console.log(verticalOrder(root314));
