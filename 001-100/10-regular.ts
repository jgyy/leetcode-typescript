function isMatch(s: string, p: string): boolean {
    const memo = new Map<string, boolean>();
    const dp = (i: number, j: number): boolean => {
        if (j === p.length) return i === s.length;
        const key = `${i}:${j}`;
        if (memo.has(key)) return memo.get(key) as boolean;
        const firstMatch = i < s.length && [s[i], "."].includes(p[j]);
        let res = false;
        if (j + 1 < p.length && p[j + 1] === "*") {
            res = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
        } else {
            res = firstMatch && dp(i + 1, j + 1);
        }
        memo.set(key, res);
        return res;
    };
    return dp(0, 0);
};

console.log(isMatch("aa", "a")); // false
console.log(isMatch("aaaaaaaaaaaaaaaaaaab", "a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*"));