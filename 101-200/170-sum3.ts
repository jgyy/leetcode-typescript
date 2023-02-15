/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
class TwoSum {
    nums: number[];
    is_sorted: boolean;
    constructor() {
        this.nums = [];
        this.is_sorted = false;
    }

    add(number: number): void {
        this.nums.push(number);
        this.is_sorted = false;
    }

    find(value: number): boolean {
        if (!this.is_sorted) {
            this.nums.sort((a, b) => a - b);
            this.is_sorted = true;
        }
        let i = 0;
        let j = this.nums.length - 1;
        while (i < j) {
            let sum = this.nums[i] + this.nums[j];
            if (sum === value) {
                return true;
            }
            if (sum < value) {
                i += 1;
            } else {
                j -= 1;
            }
        }
        return false;
    }
}

const twoSum = new TwoSum();
twoSum.add(1);
twoSum.add(3);
twoSum.add(5);
console.log(twoSum.find(4));
console.log(twoSum.find(7));
