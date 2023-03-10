function lengthOfLongestSubstringTwoDistinct(s: string): number {
    const n = s.length;
    if (n < 3) {
        return n;
    }

    let left = 0;
    let right = 0;
    let maxLen = 2;
    const map = new Map<string, number>();
    while (right < n) {
        map.set(s[right], right++);

        if (map.size === 3) {
            let delIdx = n;
            for (const value of map.values()) {
                delIdx = Math.min(delIdx, value);
            }
            map.delete(s[delIdx]);
            left = delIdx + 1;
        }
        maxLen = Math.max(maxLen, right - left);
    }
    return maxLen;
};

console.log(lengthOfLongestSubstringTwoDistinct('eceba'));