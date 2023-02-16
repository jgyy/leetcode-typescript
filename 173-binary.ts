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

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
class BSTIterator {
    nodes_sorted: number[];
    index: number;

    constructor(root: TreeNode | null) {
        this.nodes_sorted = [];
        this.index = -1;
        this.inorder(root);
    }

    private inorder(root: TreeNode | null): void {
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

const root = new TreeNode();
root.val = 7;
root.left = new TreeNode();
root.left.val = 3;
root.right = new TreeNode();
root.right.val = 15;
root.right.left = new TreeNode();
root.right.left.val = 9;
root.right.right = new TreeNode();
root.right.right.val = 20;
const obj = new BSTIterator(root);
console.log(obj.next());
console.log(obj.next());
console.log(obj.hasNext());
console.log(obj.next());
console.log(obj.hasNext());
console.log(obj.next());
console.log(obj.hasNext());
console.log(obj.next());
console.log(obj.hasNext());
