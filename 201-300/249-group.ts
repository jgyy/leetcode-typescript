function groupStrings(strings: string[]): string[][] {
    const map: Map<string, string[]> = new Map();
    for (const str of strings) {
        let key = '';
        for (let i = 1; i < str.length; i++) {
            const diff = str.charCodeAt(i) - str.charCodeAt(i - 1);
            key += diff < 0 ? diff + 26 : diff;
            key += ',';
        }
        if (map.has(key)) {
            map.get(key)!.push(str);
        } else {
            map.set(key, [str]);
        }
    }
    return Array.from(map.values());
};

console.log(groupStrings(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]));