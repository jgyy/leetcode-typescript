/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
class Solution {
    array: number[];
    original: number[];

    constructor(nums: number[]) {
        this.array = nums;
        this.original = [...nums];
    }

    reset(): number[] {
        this.array = this.original;
        this.original = [...this.original];
        return this.array;
    }

    shuffle(): number[] {
        for (let i = 0; i < this.array.length; i++) {
            const j = Math.floor(Math.random() * this.array.length);
            [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
        }
        return this.array;
    }
}

const solution = new Solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(solution.shuffle());
console.log(solution.reset());
console.log(solution.shuffle());
