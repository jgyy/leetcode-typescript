function rob(nums: number[]): number {
    const robSimple = (nums: number[]): number => {
        if (nums.length == 0 || nums == null) return 0;
        let t1 = 0;
        let t2 = 0;
        for (let current of nums) {
            let temp = t1;
            t1 = Math.max(current + t2, t1);
            t2 = temp;
        }
        return t1;
    }

    if (nums.length == 0 || nums == null) return 0;
    if (nums.length == 1) return nums[0];
    return Math.max(robSimple(nums.slice(0, nums.length - 1)), robSimple(nums.slice(1)));
};

console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));