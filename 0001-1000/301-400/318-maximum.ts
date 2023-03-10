function maxProduct(words: string[]): number {
    const n = words.length;
    const masks: number[] = new Array(n).fill(0);
    const lens: number[] = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        const word = words[i];
        let mask = 0;
        for (const ch of word) {
            mask |= 1 << (ch.charCodeAt(0) - 97);
        }
        masks[i] = mask;
        lens[i] = word.length;
    }
    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((masks[i] & masks[j]) === 0) {
                result = Math.max(result, lens[i] * lens[j]);
            }
        }
    }
    return result;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));