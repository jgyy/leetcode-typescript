/**
 * Definition for a binary tree node.
 */
class TreeNode95 {
    val: number
    left: TreeNode95 | null
    right: TreeNode95 | null
    constructor(val?: number, left?: TreeNode95 | null, right?: TreeNode95 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function generateTrees(n: number): Array<TreeNode95 | null> {
    if (n === 0) {
        return [];
    }
    const getTrees = (start: number, end: number): Array<TreeNode95 | null> => {
        const res: Array<TreeNode95 | null> = [];
        if (start > end) {
            res.push(null);
            return res;
        }
        for (let i = start; i <= end; i++) {
            const leftTrees = getTrees(start, i - 1);
            const rightTrees = getTrees(i + 1, end);
            for (const left of leftTrees) {
                for (const right of rightTrees) {
                    const curr = new TreeNode95(i);
                    curr.left = left;
                    curr.right = right;
                    res.push(curr);
                }
            }
        }
        return res;
    }
    return getTrees(1, n);
};

console.log(generateTrees(3));