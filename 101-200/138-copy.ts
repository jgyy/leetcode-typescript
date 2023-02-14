/**
 * Definition for Node.
 */
class Node {
    val: number
    next: Node | null
    random: Node | null
    constructor(val?: number, next?: Node, random?: Node) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
        this.random = (random === undefined ? null : random)
    }
}

function copyRandomList(head: Node | null): Node | null {
    if (head === null) {
        return null;
    }
    const map = new Map<Node, Node>();
    let node = head;
    while (node !== null) {
        map.set(node, new Node(node.val));
        node = node.next!;
    }
    node = head;
    while (node !== null) {
        map.get(node)!.next = map.get(node.next!) || null;
        map.get(node)!.random = map.get(node.random!) || null;
        node = node.next!;
    }
    return map.get(head)!;
};

const head138 = new Node(7);
head138.next = new Node(13);
head138.next.next = new Node(11);
head138.next.next.next = new Node(10);
head138.next.next.next.next = new Node(1);
head138.next.random = head138;
head138.next.next.random = head138.next.next.next.next;
head138.next.next.next.random = head138.next.next;
head138.next.next.next.next.random = head138;
console.log(copyRandomList(head138));
