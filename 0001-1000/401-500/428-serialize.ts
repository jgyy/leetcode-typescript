/**
 * Definition for node428.
 */
class Node428 {
    val: number
    children: Node428[]
    constructor(val?: number) {
        this.val = (val === undefined ? 0 : val)
        this.children = []
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
class Codec {
    constructor() {}

    // Encodes a tree to a single string.
    serialize(root: Node428 | null): string {
        return JSON.stringify(root);
    };

    // Decodes your encoded data to tree.
    deserialize(data: string): Node428 | null {
        return JSON.parse(data);
    };
}

const root428 = new Node428(1);
root428.children.push(new Node428(3));
root428.children.push(new Node428(2));
root428.children.push(new Node428(4));
root428.children[0].children.push(new Node428(5));
root428.children[0].children.push(new Node428(6));
const codec = new Codec();
const serial = codec.serialize(root428);
console.log(serial);
const deserial = codec.deserialize(serial);
console.log(deserial);
