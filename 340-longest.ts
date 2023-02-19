function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
    const n = s.length;
    if (n * k == 0) return 0;

    let left = 0;
    let right = 0;
    let maxLen = 1;
    const map = new Map<string, number>();

    while (right < n) {
        const c = s[right];
        map.set(c, map.has(c) ? map.get(c)! + 1 : 1);
        right++;

        while (map.size > k) {
            const d = s[left];
            map.set(d, map.get(d)! - 1);
            if (map.get(d) == 0) map.delete(d);
            left++;
        }

        maxLen = Math.max(maxLen, right - left);
    }

    return maxLen;
};

console.log(lengthOfLongestSubstringKDistinct("eceba", 2));