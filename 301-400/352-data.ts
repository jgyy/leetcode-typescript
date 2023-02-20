/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */
class SummaryRanges {
    arr: boolean[];

    constructor() {
        this.arr = [];
    }

    addNum(value: number): void {
        this.arr[value] = true;
    }

    getIntervals(): number[][] {
        const result = [];
        let start = -1;
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i]) {
                if (start == -1) {
                    start = i;
                }
            } else {
                if (start != -1) {
                    result.push([start, i - 1]);
                    start = -1;
                }
            }
        }
        if (start != -1) {
            result.push([start, this.arr.length - 1]);
        }
        return result;
    }
}

const summaryRanges = new SummaryRanges();
summaryRanges.addNum(1);
summaryRanges.addNum(3);
summaryRanges.addNum(7);
summaryRanges.addNum(2);
summaryRanges.addNum(6);
console.log(summaryRanges.getIntervals());
