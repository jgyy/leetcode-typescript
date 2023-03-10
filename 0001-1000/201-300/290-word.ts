function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;
    const map = new Map();
    for (let i = 0; i < pattern.length; i++) {
        if (map.has(pattern[i])) {
            if (map.get(pattern[i]) !== words[i]) return false;
        } else {
            if (Array.from(map.values()).includes(words[i])) return false;
            map.set(pattern[i], words[i]);
        }
    }
    return true;
};

console.log(wordPattern("abba", "dog cat cat dog")); // true