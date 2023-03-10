function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let prev = res[res.length - 1];
        let curr = intervals[i];
        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(curr[1], prev[1]);
        } else {
            res.push(curr);
        }
    }
    return res;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));