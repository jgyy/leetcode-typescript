function findSubstring(s: string, words: string[]): number[] {
    const wordLength = words[0].length;
    const wordsLength = words.length;
    const totalLength = wordLength * wordsLength;
    const result: number[] = [];

    for (let i = 0; i < s.length - totalLength + 1; i++) {
        const subString = s.substring(i, i + totalLength);
        const subWords = subString.match(new RegExp(`.{${wordLength}}`, "g"));
        if (subWords?.sort().join("") === words.sort().join("")) {
            result.push(i);
        }
    }

    return result;
};

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"])); // [0, 9]