function threeSumSmaller(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum < target) {
                count += right - left;
                left++;
            } else {
                right--;
            }
        }
    }
    return count;
};

console.log(threeSumSmaller([-2, 0, 1, 3], 2));