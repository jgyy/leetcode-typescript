function splitArray(nums: number[], k: number): number {
    let l = 0, r = 0;
    for (let i = 0; i < nums.length; i++) {
        l = Math.max(l, nums[i]);
        r += nums[i];
    }
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        let sum = 0, count = 1;
        for (let i = 0; i < nums.length; i++) {
            if (sum + nums[i] > mid) {
                count++;
                sum = nums[i];
            }
            else sum += nums[i];
        }
        if (count > k) l = mid + 1;
        else r = mid;
    }
    return l;
};

console.log(splitArray([7, 2, 5, 10, 8], 2));