function countSmaller(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n).fill(0);
    const sorted: number[] = [];
    for (let i = n - 1; i >= 0; i--) {
        let left = 0;
        let right = sorted.length;
        while (left < right) {
            const mid = (left + right) >> 1;
            if (sorted[mid] >= nums[i]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        result[i] = right;
        sorted.splice(right, 0, nums[i]);
    }
    return result;
};

console.log(countSmaller([5, 2, 6, 1]));