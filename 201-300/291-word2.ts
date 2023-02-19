function wordPatternMatch(pattern: string, s: string): boolean {
    const map = new Map();
    return isMatch(0, 0);

    function isMatch(i: number, j: number): boolean {
        if (i === pattern.length && j === s.length) return true;
        if (i === pattern.length || j === s.length) return false;
        const c = pattern[i];
        if (map.has(c)) {
            const s1 = map.get(c);
            if (!s.startsWith(s1, j)) return false;
            return isMatch(i + 1, j + s1.length);
        }
        for (let k = j; k < s.length; k++) {
            const s1 = s.substring(j, k + 1);
            if (Array.from(map.values()).includes(s1)) continue;
            map.set(c, s1);
            if (isMatch(i + 1, k + 1)) return true;
            map.delete(c);
        }
        return false;
    }
};

console.log(wordPatternMatch("abab", "redblueredblue")); // true