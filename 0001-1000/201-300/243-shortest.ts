function shortestDistance(wordsDict: string[], word1: string, word2: string): number {
    let index1 = -1;
    let index2 = -1;
    let result = wordsDict.length;
    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) {
            index1 = i;
        }
        if (wordsDict[i] === word2) {
            index2 = i;
        }
        if (index1 !== -1 && index2 !== -1) {
            result = Math.min(result, Math.abs(index1 - index2));
        }
    }
    return result;
};

console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice"));