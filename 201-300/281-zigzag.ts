/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * while (obj.hasNext()) ret.push(obj.next());
 */
class ZigzagIterator {
    vectors: number[][];
    pElem: number;
    pVec: number;
    totalNum: number;
    outputCount: number;

    constructor(v1: number[], v2: number[]) {
        this.vectors = [v1, v2];
        this.pElem = 0;
        this.pVec = 0;
        this.totalNum = v1.length + v2.length;
        this.outputCount = 0;
    }

    next(): number {
        let iter_num = 0;
        let ret = null;

        while (iter_num < this.vectors.length) {
            const curr_vec = this.vectors[this.pVec];
            if (this.pElem < curr_vec.length) {
                ret = curr_vec[this.pElem];
            }

            iter_num += 1;
            this.pVec = (this.pVec + 1) % this.vectors.length;
            if (this.pVec === 0) {
                this.pElem += 1;
            }

            if (ret !== null) {
                this.outputCount += 1;
                return ret;
            }
        }
        throw new Error("No more elements");
    }

    hasNext(): boolean {
        return this.outputCount < this.totalNum;
    }
}

const zigzagIterator = new ZigzagIterator([1, 2], [3, 4, 5, 6]);
while (zigzagIterator.hasNext()) {
    console.log(zigzagIterator.next());
}
