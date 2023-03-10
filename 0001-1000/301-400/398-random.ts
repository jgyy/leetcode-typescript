/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
class Solution {
    nums: number[];

    constructor(nums: number[]) {
        this.nums = nums;
    }

    pick(target: number): number {
        let count = 0;
        let result = -1;
        for (let i = 0; i < this.nums.length; i++) {
            if (this.nums[i] !== target) {
                continue;
            }
            count++;
            if (Math.floor(Math.random() * count) === 0) {
                result = i;
            }
        }
        return result;
    }
}

const solution = new Solution([1, 2, 3, 3, 3]);
console.log(solution.pick(3));
console.log(solution.pick(1));