function canPermutePalindrome(s: string): boolean {
    const map: Map<string, number> = new Map();
    for (const c of s) {
        if (map.has(c)) {
            map.set(c, map.get(c)! + 1);
        } else {
            map.set(c, 1);
        }
    }
    let oddCount = 0;
    for (const value of map.values()) {
        if (value % 2 === 1) {
            oddCount++;
        }
    }
    return oddCount <= 1;
};

console.log(canPermutePalindrome("code"));