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

/**
 * Your Solution382 object will be instantiated and called as such:
 * var obj = new Solution382(head)
 * var param_1 = obj.getRandom()
 */
class Solution382 {
    range: number[];

    constructor(head: ListNode | null) {
        this.range = [];
        while (head) {
            this.range.push(head.val);
            head = head.next;
        }
    }

    getRandom(): number {
        return this.range[Math.floor(Math.random() * this.range.length)];
    }
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
head.next.next.next.next.next.next = new ListNode(7);
head.next.next.next.next.next.next.next = new ListNode(8);
head.next.next.next.next.next.next.next.next = new ListNode(9);
head.next.next.next.next.next.next.next.next.next = new ListNode(10);
const solution382 = new Solution382(head);
console.log(solution382.getRandom());
console.log(solution382.getRandom());
console.log(solution382.getRandom());
console.log(solution382.getRandom());
