/**
 * Definition for singly-linked list.
 */
class ListNode369 {
    val: number
    next: ListNode369 | null
    constructor(val?: number, next?: ListNode369 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function plusOne(head: ListNode369 | null): ListNode369 | null {
    const dummy = new ListNode369(0, head);
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

const head369 = new ListNode369(1);
head369.next = new ListNode369(2);
head369.next.next = new ListNode369(3);
console.log(plusOne(head369));
