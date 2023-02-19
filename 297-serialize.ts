/**
 * Definition for a binary tree node.
 */
class TreeNode297 {
    val: number
    left: TreeNode297 | null
    right: TreeNode297 | null
    constructor(val?: number, left?: TreeNode297 | null, right?: TreeNode297 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode297 | null): string {
    if (root === null) {
        return 'null';
    }
    const left = serialize(root.left);
    const right = serialize(root.right);
    return `${root.val},${left},${right}`;
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode297 | null {
    const list = data.split(',');
    const buildTree = (list: string[]): TreeNode297 | null => {
        const rootVal = list.shift();
        if (rootVal === 'null') {
            return null;
        }
        const root = new TreeNode297(parseInt(rootVal!));
        root.left = buildTree(list);
        root.right = buildTree(list);
        return root;
    };
    return buildTree(list);
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
const root297 = new TreeNode297(1);
root297.left = new TreeNode297(2);
root297.right = new TreeNode297(3);
root297.left.left = new TreeNode297(4);
root297.left.right = new TreeNode297(5);
console.log(deserialize(serialize(root297))); // 1,2,4,null,null,5,null,null,3,null,null