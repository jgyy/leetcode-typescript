function numWays(n: number, k: number): number {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return k;
    }
    if (n === 2) {
        return k * k;
    }
    let same = k;
    let diff = k * (k - 1);
    for (let i = 3; i <= n; i++) {
        const temp = diff;
        diff = (same + diff) * (k - 1);
        same = temp;
    }
    return same + diff;
};

console.log(numWays(3, 2)); // 6