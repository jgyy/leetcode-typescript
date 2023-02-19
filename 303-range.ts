/**
 * Your NumArray303 object will be instantiated and called as such:
 * var obj = new NumArray303(nums)
 * var param_1 = obj.sumRange(left,right)
 */
class NumArray303 {
    preSum: number[];

    constructor(nums: number[]) {
        this.preSum = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            this.preSum[i + 1] = this.preSum[i] + nums[i];
        }
    }

    sumRange(left: number, right: number): number {
        return this.preSum[right + 1] - this.preSum[left];
    }
}

const numArray303 = new NumArray303([-2, 0, 3, -5, 2, -1]);
console.log(numArray303.sumRange(0, 2)); // 1
console.log(numArray303.sumRange(2, 5)); // -1
console.log(numArray303.sumRange(0, 5)); // -3
