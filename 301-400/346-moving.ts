/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
class MovingAverage {
    size: number;
    queue: number[];
    windowSum: number;
    count: number;

    constructor(size: number) {
        this.size = size;
        this.queue = [];
        this.windowSum = 0;
        this.count = 0;
    }

    next(val: number): number {
        this.count++;
        this.queue.push(val);
        const tail = this.queue.length > this.size ? this.queue.shift() : 0;
        this.windowSum = this.windowSum - tail! + val;
        return this.windowSum / Math.min(this.size, this.count);
    }
}

const movingAverage = new MovingAverage(3);
console.log(movingAverage.next(1));
console.log(movingAverage.next(10));
console.log(movingAverage.next(3));
console.log(movingAverage.next(5));
