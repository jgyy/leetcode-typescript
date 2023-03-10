/**
 * Definition for a binary tree node.
 */
class TreeNode173 {
    val: number
    left: TreeNode173 | null
    right: TreeNode173 | null
    constructor(val?: number, left?: TreeNode173 | null, right?: TreeNode173 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
class BSTIterator {
    nodes_sorted: number[];
    index: number;

    constructor(root: TreeNode173 | null) {
        this.nodes_sorted = [];
        this.index = -1;
        this.inorder(root);
    }

    private inorder(root: TreeNode173 | null): void {
        if (root === null) {
            return;
        }
        this.inorder(root.left);
        this.nodes_sorted.push(root.val);
        this.inorder(root.right);
    }

    next(): number {
        this.index += 1;
        return this.nodes_sorted[this.index];
    }

    hasNext(): boolean {
        return this.index + 1 < this.nodes_sorted.length;
    }
}

const root173 = new TreeNode173();
root173.val = 7;
root173.left = new TreeNode173();
root173.left.val = 3;
root173.right = new TreeNode173();
root173.right.val = 15;
root173.right.left = new TreeNode173();
root173.right.left.val = 9;
root173.right.right = new TreeNode173();
root173.right.right.val = 20;
const obj173 = new BSTIterator(root173);
console.log(obj173.next());
console.log(obj173.next());
console.log(obj173.hasNext());
console.log(obj173.next());
console.log(obj173.hasNext());
console.log(obj173.next());
console.log(obj173.hasNext());
console.log(obj173.next());
console.log(obj173.hasNext());
