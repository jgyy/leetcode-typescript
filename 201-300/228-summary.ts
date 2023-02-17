function summaryRanges(nums: number[]): string[] {
    if (nums.length === 0) {
        return [];
    }
    const result: string[] = [];
    let start = nums[0];
    let end = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === end + 1) {
            end = nums[i];
        } else {
            if (start === end) {
                result.push(start.toString());
            } else {
                result.push(`${start}->${end}`);
            }
            start = nums[i];
            end = nums[i];
        }
    }
    if (start === end) {
        result.push(start.toString());
    } else {
        result.push(`${start}->${end}`);
    }
    return result;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));