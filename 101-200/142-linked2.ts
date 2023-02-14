/**
 * Definition for singly-linked list.
 */
class ListNode142 {
    val: number
    next: ListNode142 | null
    constructor(val?: number, next?: ListNode142 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function detectCycle(head: ListNode142 | null): ListNode142 | null {
    if (head === null || head.next === null) {
        return null;
    }
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow!.next!;
        fast = fast.next.next!;
        if (slow === fast) {
            let ptr = head;
            while (ptr !== slow) {
                ptr = ptr!.next!;
                slow = slow!.next!;
            }
            return ptr;
        }
    }
    return null;
};

const head142 = new ListNode142(3);
head142.next = new ListNode142(2);
head142.next.next = new ListNode142(0);
head142.next.next.next = new ListNode142(-4);
head142.next.next.next.next = head142.next;
console.log(detectCycle(head142));
