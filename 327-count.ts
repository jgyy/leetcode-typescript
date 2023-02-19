function countRangeSum(nums: number[], lower: number, upper: number): number {
    const n = nums.length;
    const sums = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        sums[i + 1] = sums[i] + nums[i];
    }
    const count = (left: number, right: number, lower: number, upper: number): number => {
        if (left === right) {
            return 0;
        }
        const mid = (left + right) >> 1;
        const n1 = count(left, mid, lower, upper);
        const n2 = count(mid + 1, right, lower, upper);
        let ret = n1 + n2;

        let i = left;
        let l = mid + 1;
        let r = mid + 1;
        while (i <= mid) {
            while (l <= right && sums[l] - sums[i] < lower) {
                l++;
            }
            while (r <= right && sums[r] - sums[i] <= upper) {
                r++;
            }
            ret += r - l;
            i++;
        }

        const sorted = new Array(right - left + 1).fill(0);
        let p1 = left, p2 = mid + 1;
        let p = 0;
        while (p1 <= mid || p2 <= right) {
            if (p1 > mid) {
                sorted[p++] = sums[p2++];
            } else if (p2 > right) {
                sorted[p++] = sums[p1++];
            } else {
                if (sums[p1] < sums[p2]) {
                    sorted[p++] = sums[p1++];
                } else {
                    sorted[p++] = sums[p2++];
                }
            }
        }
        for (let i = 0; i < sorted.length; i++) {
            sums[left + i] = sorted[i];
        }
        return ret;
    }
    return count(0, n, lower, upper);
};

console.log(countRangeSum([-2, 5, -1], -2, 2));
console.log(countRangeSum([0], 0, 0));
