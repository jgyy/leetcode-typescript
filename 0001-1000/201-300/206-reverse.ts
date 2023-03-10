/**
 * Definition for singly-linked list.
 */
class ListNode206 {
    val: number
    next: ListNode206 | null
    constructor(val?: number, next?: ListNode206 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseList(head: ListNode206 | null): ListNode206 | null {
    let prev: ListNode206 | null = null;
    let curr: ListNode206 | null = head;
    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

const head206 = new ListNode206(1);
head206.next = new ListNode206(2);
head206.next.next = new ListNode206(3);
head206.next.next.next = new ListNode206(4);
head206.next.next.next.next = new ListNode206(5);
console.log(reverseList(head206));
