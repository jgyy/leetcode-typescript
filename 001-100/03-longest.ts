function lengthOfLongestSubstring(s: string): number {
    let i = 0,
        j = 0,
        max = 0;
    const map = new Map();
    while (j < s.length) {
        if (map.has(s[j])) {
            i = Math.max(i, map.get(s[j]) + 1);
        }
        map.set(s[j], j);
        max = Math.max(max, j - i + 1);
        j++;
    }
    return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));