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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let nodeA = headA;
    let nodeB = headB;
    while (nodeA !== nodeB) {
        nodeA = nodeA === null ? headB : nodeA.next;
        nodeB = nodeB === null ? headA : nodeB.next;
    }
    return nodeA;
};

const node1 = new ListNode(4); // [4,1,8,4,5]
const node2 = new ListNode(5); // [5,6,1,8,4,5]
node1.next = new ListNode(1);
node1.next.next = new ListNode(8);
node1.next.next.next = new ListNode(4);
node1.next.next.next.next = new ListNode(5);
node2.next = new ListNode(6);
node2.next.next = new ListNode(1);
node2.next.next.next = node1.next.next;
console.log(getIntersectionNode(node1, node2));
