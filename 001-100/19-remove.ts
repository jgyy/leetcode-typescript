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


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let fast = head;
    let slow = head;
    for (let i = 0; i < n; i++) {
        fast = fast ? fast.next : null;
    }
    if (!fast) {
        return head ? head.next : null;
    }
    while (fast.next) {
        fast = fast.next;
        slow = slow ? slow.next : null;
    }
    if (slow) {
        slow.next = slow.next ? slow.next.next : null;
    }
    return head;
};

const head = new ListNode(1,new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(removeNthFromEnd(head, 2));