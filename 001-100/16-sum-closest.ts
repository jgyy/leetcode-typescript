function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let closest = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                return target;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }
        }
    }
    return closest;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));