function isOneEditDistance(s: string, t: string): boolean {
    if (s.length > t.length) {
        return isOneEditDistance(t, s);
    }
    if (t.length - s.length > 1) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            if (s.length === t.length) {
                return s.slice(i + 1) === t.slice(i + 1);
            } else {
                return s.slice(i) === t.slice(i + 1);
            }
        }
    }
    return s.length + 1 === t.length;
};

console.log(isOneEditDistance("ab", "acb"));