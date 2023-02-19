function topKFrequent(nums: number[], k: number): number[] {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
    }
    let arr = Array.from(map).sort((a, b) => b[1] - a[1]);
    return arr.slice(0, k).map(a => a[0]);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));