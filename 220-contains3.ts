function containsNearbyAlmostDuplicate(nums: number[], indexDiff: number, valueDiff: number): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = Math.max(0, i - indexDiff); j < i; j++) {
            if (Math.abs(nums[i] - nums[j]) <= valueDiff) {
                return true;
            }
        }
    }
    return false;
};

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));