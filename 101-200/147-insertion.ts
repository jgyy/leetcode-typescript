/**
 * Definition for singly-linked list.
 */
class ListNode147 {
    val: number
    next: ListNode147 | null
    constructor(val?: number, next?: ListNode147 | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function insertionSortList(head: ListNode147 | null): ListNode147 | null {
    if (head === null) {
        return null;
    }
    const dummyHead = new ListNode147(0);
    dummyHead.next = head;
    let lastSorted = head;
    let curr = head.next;
    while (curr !== null) {
        if (lastSorted.val <= curr.val) {
            lastSorted = lastSorted.next!;
        } else {
            let prev = dummyHead;
            while (prev.next!.val <= curr.val) {
                prev = prev.next!;
            }
            lastSorted.next = curr.next;
            curr.next = prev.next;
            prev.next = curr;
        }
        curr = lastSorted.next;
    }
    return dummyHead.next;
};

const head147 = new ListNode147(4);
head147.next = new ListNode147(2);
head147.next.next = new ListNode147(1);
head147.next.next.next = new ListNode147(3);
console.log(insertionSortList(head147));
