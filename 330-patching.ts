function minPatches(nums: number[], n: number): number {
    let patches = 0;
    let index = 0;
    let x = 1;
    while (x <= n) {
        if (index < nums.length && nums[index] <= x) {
            x += nums[index];
            index++;
        } else {
            x *= 2;
            patches++;
        }
    }
    return patches;
};

console.log(minPatches([1, 3], 6));