/**
 * Definition for node427.
 */
class Node427 {
    val: boolean
    isLeaf: boolean
    topLeft: Node427 | null
    topRight: Node427 | null
    bottomLeft: Node427 | null
    bottomRight: Node427 | null
    constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node427, topRight?: Node427, bottomLeft?: Node427, bottomRight?: Node427) {
        this.val = (val === undefined ? false : val)
        this.isLeaf = (isLeaf === undefined ? false : isLeaf)
        this.topLeft = (topLeft === undefined ? null : topLeft)
        this.topRight = (topRight === undefined ? null : topRight)
        this.bottomLeft = (bottomLeft === undefined ? null : bottomLeft)
        this.bottomRight = (bottomRight === undefined ? null : bottomRight)
    }
}

function construct(grid: number[][]): Node427 | null {
    const n = grid.length;
    let root: Node427 | null = null;
    const dfs = (node427: Node427 | null, row: number, col: number, n: number) => {
        if (n === 1) {
            node427 = new Node427();
            node427.val = grid[row][col] === 1;
            node427.isLeaf = true;
            return node427;
        }
        node427 = new Node427();
        node427.topLeft = dfs(node427.topLeft, row, col, n / 2);
        node427.topRight = dfs(node427.topRight, row, col + n / 2, n / 2);
        node427.bottomLeft = dfs(node427.bottomLeft, row + n / 2, col, n / 2);
        node427.bottomRight = dfs(node427.bottomRight, row + n / 2, col + n / 2, n / 2);
        if (node427.topLeft!.isLeaf && node427.topRight!.isLeaf && node427.bottomLeft!.isLeaf && node427.bottomRight!.isLeaf && node427.topLeft!.val === node427.topRight!.val && node427.topRight!.val === node427.bottomLeft!.val && node427.bottomLeft!.val === node427.bottomRight!.val) {
            node427.isLeaf = true;
            node427.val = node427.topLeft!.val;
            node427.topLeft = null;
            node427.topRight = null;
            node427.bottomLeft = null;
            node427.bottomRight = null;
        }
        return node427;
    }
    root = dfs(root, 0, 0, n);
    return root;
};

console.log(construct([[1, 1], [1, 1]]));