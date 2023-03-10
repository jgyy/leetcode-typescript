function singleNumber(nums: number[]): number {
    const numSet = new Set<number>();
    for (const num of nums) {
        if (numSet.has(num)) {
            numSet.delete(num);
        } else {
            numSet.add(num);
        }
    }
    return numSet.values().next().value;
};

console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([-1, -1, -2]));