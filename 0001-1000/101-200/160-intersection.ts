/**
 * Definition for singly-linked list.
 */
class ListNode160 {
    val: number
    next: ListNode160 | null
    constructor(val?: number, next?: ListNode160 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function getIntersectionNode(headA: ListNode160 | null, headB: ListNode160 | null): ListNode160 | null {
    let nodeA = headA;
    let nodeB = headB;
    while (nodeA !== nodeB) {
        nodeA = nodeA === null ? headB : nodeA.next;
        nodeB = nodeB === null ? headA : nodeB.next;
    }
    return nodeA;
};

const node1 = new ListNode160(4); // [4,1,8,4,5]
const node2 = new ListNode160(5); // [5,6,1,8,4,5]
node1.next = new ListNode160(1);
node1.next.next = new ListNode160(8);
node1.next.next.next = new ListNode160(4);
node1.next.next.next.next = new ListNode160(5);
node2.next = new ListNode160(6);
node2.next.next = new ListNode160(1);
node2.next.next.next = node1.next.next;
console.log(getIntersectionNode(node1, node2));
