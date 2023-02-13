function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) {
        return 0;
    }
    let beginSet = new Set([beginWord]);
    let endSet = new Set([endWord]);
    let step = 1;
    while (beginSet.size > 0) {
        step++;
        const nextSet: Set<string> = new Set();
        for (const word of beginSet) {
            for (let i = 0; i < word.length; i++) {
                for (let j = 0; j < 26; j++) {
                    const nextWord = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
                    if (endSet.has(nextWord)) {
                        return step;
                    }
                    if (wordSet.has(nextWord)) {
                        nextSet.add(nextWord);
                        wordSet.delete(nextWord);
                    }
                }
            }
        }
        beginSet = nextSet;
        if (beginSet.size > endSet.size) {
            [beginSet, endSet] = [endSet, beginSet];
        }
    }
    return 0;
};

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));