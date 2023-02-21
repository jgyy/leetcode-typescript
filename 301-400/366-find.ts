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

function findLeaves(root: TreeNode | null): number[][] {
    const result = [];
    const map = new Map<number, number[]>();

    function dfs(node: TreeNode | null): number {
        if (node === null) {
            return -1;
        }

        const depth = 1 + Math.max(dfs(node.left), dfs(node.right));
        if (!map.has(depth)) {
            map.set(depth, []);
        }
        map.get(depth)!.push(node.val);
        return depth;
    }

    dfs(root);
    for (let [_, value] of map) {
        result.push(value);
    }

    return result;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);
console.log(findLeaves(root));
