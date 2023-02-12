function search(nums: number[], target: number): boolean {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return true;
        }
        if (nums[l] === nums[mid]) {
            l++;
        } else if (nums[l] < nums[mid]) {
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return false;
};

console.log(search([2, 5, 6, 0, 0, 1, 2], 0));