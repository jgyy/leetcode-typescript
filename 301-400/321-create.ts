function maxNumber(nums1: number[], nums2: number[], k: number): number[] {
    const maxSubSequence = (nums: number[], k: number): number[] => {
        const n = nums.length;
        const stack: number[] = [];
        for (let i = 0; i < n; i++) {
            while (stack.length && n - i + stack.length > k && stack[stack.length - 1] < nums[i]) {
                stack.pop();
            }
            if (stack.length < k) {
                stack.push(nums[i]);
            }
        }
        return stack;
    };

    const merge = (nums1: number[], nums2: number[]): number[] => {
        const n1 = nums1.length;
        const n2 = nums2.length;
        const nums: number[] = [];
        let i = 0;
        let j = 0;
        while (i < n1 || j < n2) {
            if (i < n1 && j < n2) {
                if (nums1[i] > nums2[j]) {
                    nums.push(nums1[i++]);
                } else if (nums1[i] < nums2[j]) {
                    nums.push(nums2[j++]);
                } else {
                    let ii = i;
                    let jj = j;
                    while (ii < n1 && jj < n2 && nums1[ii] === nums2[jj]) {
                        ii++;
                        jj++;
                    }
                    if (ii < n1 && (jj === n2 || nums1[ii] > nums2[jj])) {
                        nums.push(nums1[i++]);
                    } else {
                        nums.push(nums2[j++]);
                    }
                }
            } else if (i < n1) {
                nums.push(nums1[i++]);
            } else {
                nums.push(nums2[j++]);
            }
        }
        return nums;
    };

    const n1 = nums1.length;
    const n2 = nums2.length;
    let result: number[] = [];
    for (let i = 0; i <= k; i++) {
        if (i <= n1 && k - i <= n2) {
            const nums = merge(maxSubSequence(nums1, i), maxSubSequence(nums2, k - i));
            if (nums.length === k) {
                if (result.length === 0 || nums.join("") > result.join("")) {
                    result = nums;
                }
            }
        }
    }
    return result;
};

console.log(maxNumber([6, 6, 8], [5, 0, 9], 3));
console.log(maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5));