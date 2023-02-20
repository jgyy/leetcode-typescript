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

function plusOne(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(0, head);
    let i = dummy, j = dummy;
    while (j.next !== null) {
        j = j.next;
        if (j.val !== 9) {
            i = j;
        }
    }
    if (j.val !== 9) {
        j.val++;
    } else {
        i.val++;
        i = i.next!;
        while (i !== null) {
            i.val = 0;
            i = i.next!;
        }
    }
    return dummy.val === 0 ? dummy.next : dummy;
};

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
console.log(plusOne(head));
