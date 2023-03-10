function findTheDifference(s: string, t: string): string {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i])) {
            return t[i];
        } else {
            if (map.get(t[i]) === 0) {
                return t[i];
            } else {
                map.set(t[i], map.get(t[i]) - 1);
            }
        }
    }
    return '';
};

console.log(findTheDifference('abcd', 'abcde'));