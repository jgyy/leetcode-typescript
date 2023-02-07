/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let current = head;
    let count = 0;
    while (current !== null && count !== k) {
        current = current.next;
        count += 1;
    }
    if (count === k) {
        current = reverseKGroup(current, k);
        while (count > 0) {
            count -= 1;
            if (head) {
                let tmp = head.next;
                head.next = current;
                current = head;
                head = tmp;
            }
        }
        head = current;
    }
    return head;
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseKGroup(head, 2));