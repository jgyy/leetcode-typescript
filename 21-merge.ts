/**
 * Definition for singly-linked list.
 */
class ListNode21 {
    val: number
    next: ListNode21 | null
    constructor(val?: number, next?: ListNode21 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode21 | null, list2: ListNode21 | null): ListNode21 | null {
    if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    } else if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

const list1 = new ListNode21(1, new ListNode21(2, new ListNode21(4)));
const list2 = new ListNode21(1, new ListNode21(3, new ListNode21(4)));
console.log(mergeTwoLists(list1, list2));