function largestRectangleArea(heights: number[]): number {
    const n = heights.length;
    const left: number[] = new Array(n).fill(0);
    const right: number[] = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let p = i - 1;
        while (p >= 0 && heights[p] >= heights[i]) {
            p = left[p] - 1;
        }
        left[i] = p + 1;
    }

    for (let i = n - 1; i >= 0; i--) {
        let p = i + 1;
        while (p < n && heights[p] >= heights[i]) {
            p = right[p] + 1;
        }
        right[i] = p - 1;
    }

    let res = 0;
    for (let i = 0; i < n; i++) {
        res = Math.max(res, (right[i] - left[i] + 1) * heights[i]);
    }
    return res;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));