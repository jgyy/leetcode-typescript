/**
 * Definition for singly-linked list.
 */
class ListNode19 {
    val: number
    next: ListNode19 | null
    constructor(val?: number, next?: ListNode19 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function removeNthFromEnd(head: ListNode19 | null, n: number): ListNode19 | null {
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

const head19 = new ListNode19(1,new ListNode19(2, new ListNode19(3, new ListNode19(4, new ListNode19(5)))));
console.log(removeNthFromEnd(head19, 2));