function longestSubstring(s: string, k: number): number {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    let maxLen = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) < k) {
            maxLen = Math.max(maxLen, longestSubstring(s.substring(start, i), k));
            start = i + 1;
        }
    }
    if (start === 0) {
        return s.length;
    }
    return Math.max(maxLen, longestSubstring(s.substring(start, s.length), k));
};

console.log(longestSubstring('aaabb', 3));