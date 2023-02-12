/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
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

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(rotateRight(head, 2));