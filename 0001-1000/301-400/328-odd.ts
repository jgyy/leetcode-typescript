/**
 * Definition for singly-linked list.
 */
class ListNode328 {
    val: number
    next: ListNode328 | null
    constructor(val?: number, next?: ListNode328 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function oddEvenList(head: ListNode328 | null): ListNode328 | null {
    if (!head) {
        return null;
    }
    let odd = head;
    let even = head.next;
    const evenHead = even;
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};

const head328 = new ListNode328(1);
head328.next = new ListNode328(2);
head328.next.next = new ListNode328(3);
head328.next.next.next = new ListNode328(4);
head328.next.next.next.next = new ListNode328(5);
console.log(oddEvenList(head328));
