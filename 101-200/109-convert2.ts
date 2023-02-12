/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 * Definition for a binary tree node.
 */
class TreeNode109 {
    val: number
    left: TreeNode109 | null
    right: TreeNode109 | null
    constructor(val?: number, left?: TreeNode109 | null, right?: TreeNode109 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function sortedListToBST(head: ListNode | null): TreeNode109 | null {
    if (head === null) {
        return null;
    }
    if (head.next === null) {
        return new TreeNode109(head.val);
    }
    let slow = head;
    let fast = head.next.next;
    while (fast !== null && fast.next !== null && slow) {
        slow = slow.next!;
        fast = fast.next.next;
    }
    let root = new TreeNode109(slow!.next!.val);
    root.right = sortedListToBST(slow!.next!.next);
    slow!.next = null;
    root.left = sortedListToBST(head);
    return root;
};

const head = new ListNode();
head.val = -10;
head.next = new ListNode();
head.next.val = -3;
head.next.next = new ListNode();
head.next.next.val = 0;
head.next.next.next = new ListNode();
head.next.next.next.val = 5;
head.next.next.next.next = new ListNode();
head.next.next.next.next.val = 9;
console.log(sortedListToBST(head));
