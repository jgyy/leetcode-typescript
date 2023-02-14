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

function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next!;
    }
    const mid = slow.next;
    slow.next = null;
    let left = sortList(head);
    let right = sortList(mid);
    let h = new ListNode(0);
    let res = h;
    while (left && right) {
        if (left.val < right.val) {
            h.next = left;
            left = left.next;
        } else {
            h.next = right;
            right = right.next;
        }
        h = h.next;
    }
    h.next = left ? left : right;
    return res.next;
};

const head = new ListNode();
head.val = 4;
head.next = new ListNode();
head.next.val = 2;
head.next.next = new ListNode();
head.next.next.val = 1;
head.next.next.next = new ListNode();
head.next.next.next.val = 3;
console.log(sortList(head));
