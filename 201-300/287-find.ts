function findDuplicate(nums: number[]): number {
    let slow = 0;
    let fast = 0;
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow === fast) {
            break;
        }
    }
    let ptr1 = 0;
    let ptr2 = slow;
    while (ptr1 !== ptr2) {
        ptr1 = nums[ptr1];
        ptr2 = nums[ptr2];
    }
    return ptr1;
};

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2