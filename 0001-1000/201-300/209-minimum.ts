function minSubArrayLen(target: number, nums: number[]): number {
    const len = nums.length;
    if (len === 0) {
        return 0;
    }
    let result = Infinity;
    let start = 0;
    let end = 0;
    let sum = 0;
    while (end < len) {
        sum += nums[end];
        while (sum >= target) {
            result = Math.min(result, end - start + 1);
            sum -= nums[start];
            start++;
        }
        end++;
    }
    return result === Infinity ? 0 : result;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));