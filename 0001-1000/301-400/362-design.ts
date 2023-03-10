/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
class HitCounter {
    counter: number[];

    constructor() {
        this.counter = [];
    }

    hit(timestamp: number): void {
        this.counter.push(timestamp);
    }

    getHits(timestamp: number): number {
        let count = 0;
        for (let i = 0; i < this.counter.length; i++) {
            if (this.counter[i] > timestamp - 300) {
                count++;
            }
        }
        return count;
    }
}

const hitCounter = new HitCounter();
hitCounter.hit(1);
hitCounter.hit(2);
hitCounter.hit(3);
console.log(hitCounter.getHits(4));
hitCounter.hit(300);
console.log(hitCounter.getHits(300));
console.log(hitCounter.getHits(301));
