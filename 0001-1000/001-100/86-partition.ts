/**
 * Definition for singly-linked list.
 */
class ListNode86 {
    val: number
    next: ListNode86 | null
    constructor(val?: number, next?: ListNode86 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function partition(head: ListNode86 | null, x: number): ListNode86 | null {
    const dummy1 = new ListNode86(0);
    const dummy2 = new ListNode86(0);
    let cur1 = dummy1;
    let cur2 = dummy2;

    while (head) {
        if (head.val < x) {
            cur1.next = head;
            cur1 = cur1.next;
        } else {
            cur2.next = head;
            cur2 = cur2.next;
        }
        head = head.next;
    }
    cur2.next = null;
    cur1.next = dummy2.next;
    return dummy1.next;
};

const head86 = new ListNode86(1, new ListNode86(4, new ListNode86(3, new ListNode86(2, new ListNode86(5, new ListNode86(2))))));
console.log(partition(head86, 3));