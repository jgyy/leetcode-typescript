function characterReplacement(s: string, k: number): number {
    let max = 0;
    for (let i = 0; i < 26; i++) {
        let left = 0;
        let right = 0;
        let count = 0;
        while (right < s.length) {
            if (s[right].charCodeAt(0) - 65 === i) {
                count++;
            }
            while (right - left + 1 - count > k) {
                if (s[left].charCodeAt(0) - 65 === i) {
                    count--;
                }
                left++;
            }
            max = Math.max(max, right - left + 1);
            right++;
        }
    }
    return max;
};

console.log(characterReplacement("ABAB", 2)); // 4