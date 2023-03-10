function longestPalindrome(s: string): number {
    const map = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], 0);
        }
        map.set(s[i], map.get(s[i])! + 1);
    }

    let result = 0;
    let hasOdd = false;

    for (const count of map.values()) {
        if (count % 2 === 0) {
            result += count;
        } else {
            hasOdd = true;
            result += count - 1;
        }
    }

    return hasOdd ? result + 1 : result;
};

console.log(longestPalindrome("abccccdd"));