function findMissingRanges(nums: number[], lower: number, upper: number): string[] {
    const formatRange = (low: number, up: number) => {
        if (low === up) {
            return `${low}`;
        }
        return `${low}->${up}`;
    };

    let result = [];
    let prev = lower - 1;
    for (let i = 0; i < nums.length + 1; i++) {
        const curr = i < nums.length ? nums[i] : upper + 1;
        if (prev + 1 <= curr - 1) {
            result.push(formatRange(prev + 1, curr - 1));
        }
        prev = curr;
    }
    return result;
};

console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99));
console.log(findMissingRanges([], 1, 1));