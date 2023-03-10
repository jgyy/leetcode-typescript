/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
class MedianFinder {
    ary: number[];

    constructor() {
        this.ary = [];
    }

    addNum(num: number): void {
        var low = 0;
        var high = this.ary.length - 1;

        while (low <= high) {
            var mid = Math.floor((high + low) / 2);

            if (this.ary[mid] < num) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        this.ary.splice(low, 0, num);
    }

    findMedian(): number {
        var mid = Math.floor(this.ary.length / 2);
        if (this.ary.length % 2 === 0) {
            return (this.ary[mid] + this.ary[mid - 1]) / 2;
        }
        else {
            return this.ary[mid];
        }
    }
}

const medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
console.log(medianFinder.findMedian()); // 1.5
medianFinder.addNum(3);
console.log(medianFinder.findMedian()); // 2
