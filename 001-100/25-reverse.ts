/**
 * Definition for singly-linked list.
 */
class ListNode25 {
    val: number
    next: ListNode25 | null
    constructor(val?: number, next?: ListNode25 | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseKGroup(head: ListNode25 | null, k: number): ListNode25 | null {
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

const head25 = new ListNode25(1, new ListNode25(2, new ListNode25(3, new ListNode25(4, new ListNode25(5)))));
console.log(reverseKGroup(head25, 2));