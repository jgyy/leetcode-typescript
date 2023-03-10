function isScramble(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) {
        return false;
    }
    if (s1.length === 0) {
        return true;
    }
    if (s1 === s2) {
        return true;
    }
    const n = s1.length;
    const f = new Array(n + 1).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(false)));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            f[1][i][j] = s1[i] === s2[j];
        }
    }
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            for (let j = 0; j <= n - len; j++) {
                for (let k = 1; k <= len - 1; k++) {
                    if ((f[k][i][j] && f[len - k][i + k][j + k]) || (f[k][i][j + len - k] && f[len - k][i + k][j])) {
                        f[len][i][j] = true;
                        break;
                    }
                }
            }
        }
    }
    return f[n][0][0];
};

console.log(isScramble("great", "rgeat"));
console.log(isScramble("eebaacbcbcadaaedceaaacadccd", "eadcaacabaddaceacbceaabeccd"));