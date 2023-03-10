/**
 * Definition for singly-linked list.
 */
class ListNode203 {
    val: number
    next: ListNode203 | null
    constructor(val?: number, next?: ListNode203 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeElements(head: ListNode203 | null, val: number): ListNode203 | null {
    if (head === null) {
        return null;
    }
    const dummy = new ListNode203(0, head);
    let prev = dummy;
    let curr = head;
    while (curr !== null) {
        if (curr.val === val) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }
        curr = curr.next!;
    }
    return dummy.next;
};

const head203 = new ListNode203(1);
head203.next = new ListNode203(2);
head203.next.next = new ListNode203(6);
head203.next.next.next = new ListNode203(3);
head203.next.next.next.next = new ListNode203(4);
head203.next.next.next.next.next = new ListNode203(5);
head203.next.next.next.next.next.next = new ListNode203(6);
console.log(removeElements(head203, 6));
