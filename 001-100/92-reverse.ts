/**
 * Definition for singly-linked list.
 */
class ListNode92 {
    val: number
    next: ListNode92 | null
    constructor(val?: number, next?: ListNode92 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseBetween(head: ListNode92 | null, left: number, right: number): ListNode92 | null {
    const dummyHead = new ListNode92(0);
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

const head92 = new ListNode92();
head92.val = 1;
head92.next = new ListNode92();
head92.next.val = 2;
head92.next.next = new ListNode92();
head92.next.next.val = 3;
head92.next.next.next = new ListNode92();
head92.next.next.next.val = 4;
head92.next.next.next.next = new ListNode92();
head92.next.next.next.next.val = 5;
console.log(reverseBetween(head92, 2, 4));