/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
class MyStack {
    queue: number[];

    constructor() {
        this.queue = [];
    }

    push(x: number): void {
        this.queue.push(x);
        for (let i = 0; i < this.queue.length - 1; i++) {
            this.queue.push(this.queue.shift()!);
        }
    }

    pop(): number {
        return this.queue.shift()!;
    }

    top(): number {
        return this.queue[0];
    }

    empty(): boolean {
        return this.queue.length === 0;
    }
}

const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top());
console.log(myStack.pop());
console.log(myStack.empty());
