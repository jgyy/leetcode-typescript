/**
 * Your solution384 object will be instantiated and called as such:
 * var obj = new solution384(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
class solution384 {
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

const solution384solution384 = new solution384([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(solution384solution384.shuffle());
console.log(solution384solution384.reset());
console.log(solution384solution384.shuffle());
