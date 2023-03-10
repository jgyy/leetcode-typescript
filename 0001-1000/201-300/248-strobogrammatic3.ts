function strobogrammaticInRange(low: string, high: string): number {
    let count = 0;
    const map: { [k: string]: string } = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };
    const dfs = (low: string, high: string, n: string[], left: number, right: number) => {
        if (left > right) {
            const tooSmall = n.join('').length === low.length && n.join('') < low;
            const tooLarge = n.join('').length === high.length && n.join('') > high;
            if (tooSmall || tooLarge) return 0;
            else return 1;
        }
        let count = 0;
        for (let d in map) {
            n[left] = d;
            n[right] = map[d];
            const not0start = !(n.length !== 1 && n[0] === '0');
            const notSingle69 = !(left === right && (d === '6' || d === '9'));
            if (not0start && notSingle69) count += dfs(low, high, n, left + 1, right - 1);
        }
        return count;
    }

    for (let n = low.length; n <= high.length; n++) {
        count += dfs(low, high, new Array(n), 0, n - 1);
    }
    return count;
};

console.log(strobogrammaticInRange("50", "100"));
console.log(strobogrammaticInRange("0", "100"));
console.log(strobogrammaticInRange("100", "1000"));