function shortestWordDistance(wordsDict: string[], word1: string, word2: string): number {
    let result = Number.MAX_SAFE_INTEGER;
    let prev = -1;
    let same = word1 === word2;
    for (let i = 0; i < wordsDict.length; i++) {
        const word = wordsDict[i];
        if (word === word1 || word === word2) {
            if (prev !== -1 && (same || wordsDict[prev] !== word)) {
                result = Math.min(result, i - prev);
            }
            prev = i;
        }
    }
    return result;
};

console.log(shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice"));
console.log(shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "makes"));