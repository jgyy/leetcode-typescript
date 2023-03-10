function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    const map: { [key: string]: number } = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
        map[t[i]] = (map[t[i]] || 0) - 1;
    }
    for (let key in map) {
        if (map[key] !== 0) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram('anagram', 'nagaram'));