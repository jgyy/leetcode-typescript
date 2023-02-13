function candy(ratings: number[]): number {
    const n = ratings.length;
    const left = new Array(n).fill(0);
    for (let i = 0; i < n; ++i) {
        if (i > 0 && ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
        } else {
            left[i] = 1;
        }
    }
    const right = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; --i) {
        if (i < n - 1 && ratings[i] > ratings[i + 1]) {
            right[i] = right[i + 1] + 1;
        } else {
            right[i] = 1;
        }
    }
    let ret = 0;
    for (let i = 0; i < n; ++i) {
        ret += Math.max(left[i], right[i]);
    }
    return ret;
};

console.log(candy([1, 0, 2]));