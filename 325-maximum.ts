function maxSubArrayLen(nums: number[], k: number): number {
    const n = nums.length;
    const preSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        preSum[i + 1] = preSum[i] + nums[i];
    }
    let result = 0;
    const map = new Map<number, number>();
    for (let i = 0; i <= n; i++) {
        const target = preSum[i] - k;
        if (map.has(target)) {
            result = Math.max(result, i - map.get(target)!);
        }
        if (!map.has(preSum[i])) {
            map.set(preSum[i], i);
        }
    }
    return result;
};

console.log(maxSubArrayLen([1, -1, 5, -2, 3], 3));