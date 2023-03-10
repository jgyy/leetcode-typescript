function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();
    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (map.has(key)) {
            map.get(key).push(str);
        } else {
            map.set(key, [str]);
        }
    }
    return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));