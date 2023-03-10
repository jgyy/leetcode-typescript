/**
 * Definition for a binary tree node.
 */
class TreeNode366 {
    val: number
    left: TreeNode366 | null
    right: TreeNode366 | null
    constructor(val?: number, left?: TreeNode366 | null, right?: TreeNode366 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function findLeaves(root: TreeNode366 | null): number[][] {
    const result = [];
    const map = new Map<number, number[]>();

    function dfs(node: TreeNode366 | null): number {
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

const root366 = new TreeNode366(1);
root366.left = new TreeNode366(2);
root366.left.left = new TreeNode366(4);
root366.left.right = new TreeNode366(5);
root366.right = new TreeNode366(3);
console.log(findLeaves(root366));
