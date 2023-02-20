function maxEnvelopes(envelopes: number[][]): number {
    function firstGTE(arr: number[], val: number): number {
        let l = 0, r = arr.length - 1, ans = -1;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] >= val) {
                ans = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return ans;
    }
    envelopes.sort((a, b) => {
        if (a[0] == b[0]) return b[1] - a[1];
        return a[0] - b[0];
    });
    const dp = [];
    for (let i = 0; i < envelopes.length; i++) {
        let index = firstGTE(dp, envelopes[i][1]);
        if (index == -1) {
            dp.push(envelopes[i][1]);
        } else if (index != -1) {
            dp[index] = envelopes[i][1];
        }
    }
    return dp.length;
};

console.log(maxEnvelopes([[4, 5], [4, 6], [6, 7], [2, 3], [1, 1]]));
console.log(maxEnvelopes([[5, 4], [6, 4], [6, 7], [2, 3]]));