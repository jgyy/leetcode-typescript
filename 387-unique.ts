function firstUniqChar(s: string): number {
    const map: Map<string, number> = new Map();
    for (const c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar('leetcode'));