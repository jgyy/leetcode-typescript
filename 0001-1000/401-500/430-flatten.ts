/**
 * Definition for node.
 */
class Node {
    val: number
    prev: Node | null
    next: Node | null
    child: Node | null
    constructor(val?: number, prev?: Node, next?: Node, child?: Node) {
        this.val = (val === undefined ? 0 : val);
        this.prev = (prev === undefined ? null : prev);
        this.next = (next === undefined ? null : next);
        this.child = (child === undefined ? null : child);
    }
}

function flatten(head: Node | null): Node | null {
    if (head == null) {
        return null;
    }
    let cur = head;
    while (cur != null) {
        if (cur.child == null) {
            cur = cur.next!;
            continue;
        }
        let next = cur.next;
        let child = cur.child;
        cur.next = child;
        child.prev = cur;
        cur.child = null;
        while (child.next != null) {
            child = child.next;
        }
        child.next = next;
        if (next != null) {
            next.prev = child;
        }
    }
    return head;
};

const head = new Node(1);
head.next = new Node(2);
head.next.prev = head;
head.next.next = new Node(3);
head.next.next.prev = head.next;
head.next.next.next = new Node(4);
head.next.next.next.prev = head.next.next;
head.next.next.next.next = new Node(5);
head.next.next.next.next.prev = head.next.next.next;
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.prev = head.next.next.next.next;
head.child = new Node(7);
head.child.next = new Node(8);
head.child.next.prev = head.child;
head.child.next.next = new Node(9);
head.child.next.next.prev = head.child.next;
head.child.next.next.next = new Node(10);
head.child.next.next.next.prev = head.child.next.next;
head.child.next.next.next.next = new Node(11);
head.child.next.next.next.next.prev = head.child.next.next.next;
head.child.next.next.next.next.next = new Node(12);
head.child.next.next.next.next.next.prev = head.child.next.next.next.next;
head.child.next.child = new Node(13);
head.child.next.child.next = new Node(14);
head.child.next.child.next.prev = head.child.next.child;
head.child.next.child.next.next = new Node(15);
head.child.next.child.next.next.prev = head.child.next.child.next;
head.child.next.child.next.next.next = new Node(16);
head.child.next.child.next.next.next.prev = head.child.next.child.next.next;
head.child.next.child.next.next.next.next = new Node(17);
head.child.next.child.next.next.next.next.prev = head.child.next.child.next.next.next;
head.child.next.child.next.next.next.next.next = new Node(18);
head.child.next.child.next.next.next.next.next.prev = head.child.next.child.next.next.next.next;
head.child.next.child.next.next.next.next.next.next = new Node(19);
head.child.next.child.next.next.next.next.next.next.prev = head.child.next.child.next.next.next.next.next;
head.child.next.child.next.next.next.next.next.next.next = new Node(20);
head.child.next.child.next.next.next.next.next.next.next.prev = head.child.next.child.next.next.next.next.next.next;
head.child.next.child.next.next.next.next.next.next.next.next = new Node(21);
head.child.next.child.next.next.next.next.next.next.next.next.prev = head.child.next.child.next.next.next.next.next.next.next;
head.child.next.child.next.next.next.next.next.next.next.next.next = new Node(22);
head.child.next.child.next.next.next.next.next.next.next.next.next.prev = head.child.next.child.next.next.next.next.next.next.next.next;
console.log(flatten(head));
