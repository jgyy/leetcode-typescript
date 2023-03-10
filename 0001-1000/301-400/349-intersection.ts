function intersection(nums1: number[], nums2: number[]): number[] {
    return Array.from(new Set(nums1.filter(x => nums2.includes(x))));
};

console.log(intersection([1, 2, 2, 1], [2, 2]));