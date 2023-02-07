/**
 * Definition for singly-linked list.
 */
class ListNode24 {
    val: number
    next: ListNode24 | null
    constructor(val?: number, next?: ListNode24 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function swapPairs(head: ListNode24 | null): ListNode24 | null {
    if (head === null || head.next === null) {
        return head;
    }
    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
};

const head24 = new ListNode24(1, new ListNode24(2, new ListNode24(3, new ListNode24(4))));
console.log(swapPairs(head24));