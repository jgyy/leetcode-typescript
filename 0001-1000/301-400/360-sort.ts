function sortTransformedArray(nums: number[], a: number, b: number, c: number): number[] {
    let result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        result.push(a * nums[i] * nums[i] + b * nums[i] + c);
    }
    result.sort((a, b) => a - b);
    return result;
};

console.log(sortTransformedArray([-4, -2, 2, 4], 1, 3, 5));