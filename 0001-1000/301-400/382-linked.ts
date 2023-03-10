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

const head382 = new ListNode(1);
head382.next = new ListNode(2);
head382.next.next = new ListNode(3);
head382.next.next.next = new ListNode(4);
head382.next.next.next.next = new ListNode(5);
head382.next.next.next.next.next = new ListNode(6);
head382.next.next.next.next.next.next = new ListNode(7);
head382.next.next.next.next.next.next.next = new ListNode(8);
head382.next.next.next.next.next.next.next.next = new ListNode(9);
head382.next.next.next.next.next.next.next.next.next = new ListNode(10);
const solution382 = new Solution382(head382);
console.log(solution382.getRandom());
console.log(solution382.getRandom());
console.log(solution382.getRandom());
console.log(solution382.getRandom());
