function twoSum167(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [-1, -1];
};

console.log(twoSum167([2, 7, 11, 15], 9)); // [1, 2]