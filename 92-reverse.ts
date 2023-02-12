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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let g = dummyHead;
    let p = head;
    for (let i = 0; i < left - 1; i++) {
        g = g.next!;
        p = p!.next;
    }
    for (let i = 0; i < right - left; i++) {
        let removed = p!.next;
        p!.next = p!.next!.next;
        removed!.next = g.next;
        g.next = removed;
    }
    return dummyHead.next;
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseBetween(head, 2, 4));