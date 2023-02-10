function trap(height: number[]): number {
    let result = 0;
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= leftMax ? leftMax = height[left] : result += leftMax - height[left];
            left++;
        } else {
            height[right] >= rightMax ? rightMax = height[right] : result += rightMax - height[right];
            right--;
        }
    }
    return result;

};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6