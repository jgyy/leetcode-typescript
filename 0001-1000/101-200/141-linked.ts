/**
 * Definition for singly-linked list.
 */
class ListNode141 {
    val: number
    next: ListNode141 | null
    constructor(val?: number, next?: ListNode141 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function hasCycle(head: ListNode141 | null): boolean {
    if (head === null || head.next === null) {
        return false;
    }
    let slow = head;
    let fast = head.next;
    while (slow !== fast) {
        if (fast === null || fast.next === null) {
            return false;
        }
        slow = slow!.next!;
        fast = fast!.next!.next!;
    }
    return true;
};

const head141 = new ListNode141(3);
head141.next = new ListNode141(2);
head141.next.next = new ListNode141(0);
head141.next.next.next = new ListNode141(-4);
head141.next.next.next.next = head141.next;
console.log(hasCycle(head141));
