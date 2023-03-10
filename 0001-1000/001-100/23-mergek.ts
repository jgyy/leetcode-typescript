/**
 * Definition for singly-linked list.
 */
class ListNode23 {
    val: number
    next: ListNode23 | null
    constructor(val?: number, next?: ListNode23 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeKLists(lists: Array<ListNode23 | null>): ListNode23 | null {
    const mergeTwoLists = (l1: ListNode23 | null, l2: ListNode23 | null): ListNode23 | null => {
        if (!l1) {
            return l2;
        }
        if (!l2) {
            return l1;
        }
        if (l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    }
    if (lists.length === 0) {
        return null;
    }
    let result = lists[0];
    for (let i = 1; i < lists.length; i++) {
        result = mergeTwoLists(result, lists[i]);
    }
    return result;
};

const l1 = new ListNode23(1, new ListNode23(4, new ListNode23(5)));
const l2 = new ListNode23(1, new ListNode23(3, new ListNode23(4)));
const l3 = new ListNode23(2, new ListNode23(6));
const lists = [l1, l2, l3];
console.log(mergeKLists(lists));