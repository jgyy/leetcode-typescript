function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    let temp = Array(nums1.length).fill(0);
    let re: number[][] = [];
    let getRe = function () {
        let t = Infinity;
        for (let i = 0; i < nums1.length; i++) {
            if (temp[i] < nums2.length && t > (nums1[i] + nums2[temp[i]])) {
                t = nums1[i] + nums2[temp[i]];
            }
        }
        if (t == Infinity || re.length >= k) {
            return;
        } else {
            for (let i = 0; i < nums1.length; i++) {
                if (temp[i] < nums2.length && t == (nums1[i] + nums2[temp[i]])) {
                    re.push(Array.of(nums1[i], nums2[temp[i]]));
                    temp[i]++;
                }
            }
            getRe();
        }
    }
    getRe();
    return re.slice(0, k);
};

console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));
console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2));