/**
 * Definition for singly-linked list.
 */
class ListNode148 {
    val: number
    next: ListNode148 | null
    constructor(val?: number, next?: ListNode148 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function sortList(head: ListNode148 | null): ListNode148 | null {
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
    let h = new ListNode148(0);
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

const head148 = new ListNode148();
head148.val = 4;
head148.next = new ListNode148();
head148.next.val = 2;
head148.next.next = new ListNode148();
head148.next.next.val = 1;
head148.next.next.next = new ListNode148();
head148.next.next.next.val = 3;
console.log(sortList(head148));
