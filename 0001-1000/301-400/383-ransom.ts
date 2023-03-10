function canConstruct(ransomNote: string, magazine: string): boolean {
    const map: { [key: string]: number } = {};
    for (const c of magazine) {
        map[c] = (map[c] || 0) + 1;
    }
    for (const c of ransomNote) {
        if (map[c] === undefined || map[c] === 0) {
            return false;
        }
        map[c]--;
    }
    return true;
};

console.log(canConstruct('a', 'b')); // false