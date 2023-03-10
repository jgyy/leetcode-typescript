function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const middleIndex = Math.floor(mergedArray.length / 2);
    if (mergedArray.length % 2 === 0) {
        return (mergedArray[middleIndex] + mergedArray[middleIndex - 1]) / 2;
    } else {
        return mergedArray[middleIndex];
    }
};

console.log(findMedianSortedArrays([1, 3], [2]));