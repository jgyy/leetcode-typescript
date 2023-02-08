function searchRange(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            let start = mid;
            let end = mid;
            while (nums[start] === target) {
                start--;
            }
            while (nums[end] === target) {
                end++;
            }
            return [start + 1, end - 1];
        }
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]