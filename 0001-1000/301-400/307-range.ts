/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
class NumArray {
    a: number[] = [];

    constructor(nums: number[]) {
        this.a = nums;
    }

    update(index: number, val: number): void {
        this.a[index] = val;
    }

    sumRange(left: number, right: number): number {
        let sum = 0;
        for (let i = left; i <= right; i++) {
            sum += this.a[i];
        }
        return sum;
    }
}

const numArray = new NumArray([1, 3, 5]);
console.log(numArray.sumRange(0, 2));
numArray.update(1, 2);
console.log(numArray.sumRange(0, 2));
