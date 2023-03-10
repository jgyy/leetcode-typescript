/**
 * Definition for singly-linked list.
 */
class ListNode61 {
    val: number
    next: ListNode61 | null
    constructor(val?: number, next?: ListNode61 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function rotateRight(head: ListNode61 | null, k: number): ListNode61 | null {
    if (head === null) return null;
    let n = 1;
    let cur = head;
    while (cur.next !== null) {
        n++;
        cur = cur.next;
    }
    cur.next = head;
    let add = n - k % n;
    while (add > 0 && cur.next !== null) {
        cur = cur.next;
        add--;
    }
    let newHead = cur.next;
    cur.next = null;
    return newHead;
};

const head61 = new ListNode61(1, new ListNode61(2, new ListNode61(3, new ListNode61(4, new ListNode61(5)))));
console.log(rotateRight(head61, 2));