function wordBreak(s: string, wordDict: string[]): string[] {
    const n = s.length;
    const dp = new Array(n + 1).fill(0).map(() => new Array<string>());
    dp[0].push("");
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j].length > 0 && wordDict.includes(s.substring(j, i))) {
                for (const str of dp[j]) {
                    dp[i].push(str + (str.length == 0 ? "" : " ") + s.substring(j, i));
                }
            }
        }
    }
    return dp[n];
};

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));