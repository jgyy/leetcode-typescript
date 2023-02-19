/**
 * Definition for singly-linked list.
 */
class ListNode237 {
    val: number
    next: ListNode237 | null
    constructor(val?: number, next?: ListNode237 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode237 | null): void {
    if (node === null) {
        return;
    }
    node.val = node.next!.val;
    node.next = node.next!.next;
    console.log(node);
};

const head237 = new ListNode237(4);
head237.next = new ListNode237(5);
head237.next.next = new ListNode237(1);
head237.next.next.next = new ListNode237(9);
deleteNode(head237.next);
