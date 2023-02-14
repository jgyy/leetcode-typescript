/**
 * Definition for singly-linked list.
 */
class ListNode143 {
    val: number
    next: ListNode143 | null
    constructor(val?: number, next?: ListNode143 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode143 | null): void {
    if (head === null) {
        return;
    }
    const nodes: ListNode143[] = [];
    let node = head;
    while (node !== null) {
        nodes.push(node);
        node = node.next!;
    }
    let i = 0;
    let j = nodes.length - 1;
    while (i < j) {
        nodes[i].next = nodes[j];
        i++;
        if (i === j) {
            break;
        }
        nodes[j].next = nodes[i];
        j--;
    }
    nodes[i].next = null;
    console.log(nodes);
};

const head143 = new ListNode143(1);
head143.next = new ListNode143(2);
head143.next.next = new ListNode143(3);
head143.next.next.next = new ListNode143(4);
reorderList(head143);
