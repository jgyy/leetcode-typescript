/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 */
class Iterators {
    nodes_sorted: number[];
    index: number;

    constructor() {
        this.nodes_sorted = [];
        this.index = -1;
    }

    next(): number {
        this.index += 1;
        return this.nodes_sorted[this.index];
    }

    hasNext(): boolean {
        return this.index + 1 < this.nodes_sorted.length;
    }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
class PeekingIterator {
    iterator: Iterators;
    cache: number;
    hasPeeked: boolean;

    constructor(iterator: Iterators) {
        this.iterator = iterator;
        this.cache = 0;
        this.hasPeeked = false;
    }

    peek(): number {
        if (!this.hasPeeked) {
            this.cache = this.iterator.next();
            this.hasPeeked = true;
        }
        return this.cache;
    }

    next(): number {
        if (!this.hasPeeked) {
            return this.iterator.next();
        }
        this.hasPeeked = false;
        return this.cache;
    }

    hasNext(): boolean {
        return this.hasPeeked || this.iterator.hasNext();
    }
}

const iterator = new Iterators();
iterator.nodes_sorted = [1, 2, 3];
const peekingIterator = new PeekingIterator(iterator);
console.log(peekingIterator.next()); // 1
console.log(peekingIterator.peek()); // 2
console.log(peekingIterator.next()); // 2
console.log(peekingIterator.next()); // 3
console.log(peekingIterator.hasNext()); // false
