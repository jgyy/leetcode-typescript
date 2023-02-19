function intersect(nums1: number[], nums2: number[]): number[] {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let i = 0;
    let j = 0;
    const result = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] == nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));