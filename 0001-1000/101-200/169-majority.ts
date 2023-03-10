function majorityElement(nums: number[]): number {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    const arr = Array.from(map.entries());
    arr.sort((a, b) => b[1] - a[1]);
    return arr[0][0];
};

console.log(majorityElement([3, 2, 3])); // 3