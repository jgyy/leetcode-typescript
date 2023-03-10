/**
 * Definition for singly-linked list.
 */
class ListNode2 {
    val: number
    next: ListNode2 | null
    constructor(val?: number, next?: ListNode2 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode2 | null, l2: ListNode2 | null): ListNode2 | null {
    let dummyHead = new ListNode2(0);
    let p = l1, q = l2, curr = dummyHead;
    let carry = 0;
    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode2(sum % 10);
        curr = curr.next;
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode2(carry);
    }
    return dummyHead.next;
};

const listNode = new ListNode2();
listNode.val = 2;
listNode.next = new ListNode2(4, new ListNode2(3));
const listNode2 = new ListNode2();
listNode2.val = 5;
listNode2.next = new ListNode2(6, new ListNode2(4));
console.log(addTwoNumbers(listNode, listNode2));
