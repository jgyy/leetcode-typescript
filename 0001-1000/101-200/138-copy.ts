/**
 * Definition for Node138.
 */
class Node138 {
    val: number
    next: Node138 | null
    random: Node138 | null
    constructor(val?: number, next?: Node138, random?: Node138) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
        this.random = (random === undefined ? null : random)
    }
}

function copyRandomList(head: Node138 | null): Node138 | null {
    if (head === null) {
        return null;
    }
    const map = new Map<Node138, Node138>();
    let node138 = head;
    while (node138 !== null) {
        map.set(node138, new Node138(node138.val));
        node138 = node138.next!;
    }
    node138 = head;
    while (node138 !== null) {
        map.get(node138)!.next = map.get(node138.next!) || null;
        map.get(node138)!.random = map.get(node138.random!) || null;
        node138 = node138.next!;
    }
    return map.get(head)!;
};

const head138 = new Node138(7);
head138.next = new Node138(13);
head138.next.next = new Node138(11);
head138.next.next.next = new Node138(10);
head138.next.next.next.next = new Node138(1);
head138.next.random = head138;
head138.next.next.random = head138.next.next.next.next;
head138.next.next.next.random = head138.next.next;
head138.next.next.next.next.random = head138;
console.log(copyRandomList(head138));
