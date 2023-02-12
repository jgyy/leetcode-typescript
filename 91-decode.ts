function numDecodings(s: string): number {
    const n = s.length;
    const f = new Array(n + 1).fill(0);
    f[0] = 1;
    for (let i = 1; i <= n; i++) {
        if (s[i - 1] !== '0') {
            f[i] += f[i - 1];
        }
        if (i > 1 && s[i - 2] !== '0' && parseInt(s.substr(i - 2, 2)) <= 26) {
            f[i] += f[i - 2];
        }
    }
    return f[n];
};

console.log(numDecodings('12'));