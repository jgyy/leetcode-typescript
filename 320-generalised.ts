function generateAbbreviations(word: string): string[] {
    const result: string[] = [];
    const dfs = (word: string, pos: number, cur: string, count: number) => {
        if (pos === word.length) {
            if (count > 0) {
                cur += count;
            }
            result.push(cur);
        } else {
            dfs(word, pos + 1, cur, count + 1);
            dfs(word, pos + 1, cur + (count > 0 ? count : "") + word[pos], 0);
        }
    };
    dfs(word, 0, "", 0);
    return result;
};

console.log(generateAbbreviations("word"));