/**
 * Definition for singly-linked list.
 */
class ListNode82 {
    val: number
    next: ListNode82 | null
    constructor(val?: number, next?: ListNode82 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function deleteDuplicates82(head: ListNode82 | null): ListNode82 | null {
    if (head === null) {
        return head;
    }

    const dummy = new ListNode82();
    dummy.next = head;

    let cur = dummy;
    while (cur.next !== null && cur.next.next !== null) {
        if (cur.next.val === cur.next.next.val) {
            const x = cur.next.val;
            while (cur.next !== null && cur.next.val === x) {
                cur.next = cur.next.next;
            }
        } else {
            cur = cur.next;
        }
    }

    return dummy.next;
};

const head82 = new ListNode82(1, new ListNode82(1, new ListNode82(2, new ListNode82(3, new ListNode82(3)))));
console.log(deleteDuplicates82(head82));