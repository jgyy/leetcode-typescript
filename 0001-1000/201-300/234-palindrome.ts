/**
 * Definition for singly-linked list.
 */
class ListNode234 {
    val: number
    next: ListNode234 | null
    constructor(val?: number, next?: ListNode234 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function isPalindrome(head: ListNode234 | null): boolean {
    if (head === null) {
        return true;
    }
    const stack: number[] = [];
    let node = head;
    while (node !== null) {
        stack.push(node.val);
        node = node.next!;
    }
    node = head;
    while (node !== null) {
        if (node.val !== stack.pop()!) {
            return false;
        }
        node = node.next!;
    }
    return true;
};

const head234 = new ListNode234(1);
head234.next = new ListNode234(2);
head234.next.next = new ListNode234(2);
head234.next.next.next = new ListNode234(1);
console.log(isPalindrome(head234));
