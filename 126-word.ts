function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
    const result: string[][] = [];
    const wordMap: Map<string, string[]> = new Map<string, string[]>();
    const queue = [beginWord];
    const visited = new Set<string>();
    visited.add(beginWord);
    let found = false;
    while (queue.length > 0) {
        const size = queue.length;
        const newVisited = new Set<string>();
        for (let i = 0; i < size; i++) {
            const word = queue.shift() as string;
            for (let j = 0; j < word.length; j++) {
                for (let k = 0; k < 26; k++) {
                    const newWord = word.substring(0, j) + String.fromCharCode(97 + k) + word.substring(j + 1);
                    if (wordList.indexOf(newWord) >= 0 && !visited.has(newWord)) {
                        if (newWord === endWord) {
                            found = true;
                        }
                        if (!wordMap.has(newWord)) {
                            wordMap.set(newWord, []);
                        }
                        wordMap.get(newWord)!.push(word);
                        if (!newVisited.has(newWord)) {
                            queue.push(newWord);
                            newVisited.add(newWord);
                        }
                    }
                }
            }
        }
        if (found) {
            break;
        }
        visited.forEach((value) => newVisited.add(value));
        visited.clear();
        newVisited.forEach((value) => visited.add(value));
        newVisited.clear();
    }
    if (found) {
        const path: string[] = [];
        path.push(endWord);
        dfs(endWord, path);
    }
    return result;

    function dfs(word: string, path: string[]) {
        if (word === beginWord) {
            result.push([...path].reverse());
            return;
        }
        const nextWords = wordMap.get(word) || [];
        for (const nextWord of nextWords) {
            path.push(nextWord);
            dfs(nextWord, path);
            path.pop();
        }
    }
};

console.log(findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));