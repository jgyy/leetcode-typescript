function largestDivisibleSubset(nums: number[]): number[] {
    if (nums.length === 0) {
        return [];
    }

    nums.sort((a, b) => a - b);
    const dp = new Array(nums.length).fill(1);
    const prev = new Array(nums.length).fill(-1);
    let max = 1;
    let maxIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] % nums[j] === 0) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    prev[i] = j;
                }
            }
        }

        if (dp[i] > max) {
            max = dp[i];
            maxIndex = i;
        }
    }

    const result = [];
    while (maxIndex !== -1) {
        result.push(nums[maxIndex]);
        maxIndex = prev[maxIndex];
    }

    return result;
};

console.log(largestDivisibleSubset([1, 2, 3]));