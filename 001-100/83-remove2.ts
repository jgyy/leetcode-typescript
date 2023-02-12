/**
 * Definition for singly-linked list.
 */
class ListNode83 {
    val: number
    next: ListNode83 | null
    constructor(val?: number, next?: ListNode83 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function deleteDuplicates(head: ListNode83 | null): ListNode83 | null {
    let cur = head;
    while (cur !== null && cur.next !== null) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};

const head83 = new ListNode83(1, new ListNode83(1, new ListNode83(2, new ListNode83(3, new ListNode83(3)))));
console.log(deleteDuplicates(head83));