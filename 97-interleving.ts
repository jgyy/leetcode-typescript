function isInterleave(s1: string, s2: string, s3: string): boolean {
    let s1Len = s1.length;
    let s2Len = s2.length;
    let s3Len = s3.length;
    if (s1Len + s2Len !== s3Len) {
        return false;
    }
    let dp: boolean[][] = [];
    for (let i = 0; i <= s1Len; i++) {
        dp[i] = [];
        for (let j = 0; j <= s2Len; j++) {
            dp[i][j] = false;
        }
    }
    dp[0][0] = true;
    for (let i = 0; i <= s1Len; i++) {
        for (let j = 0; j <= s2Len; j++) {
            let p = i + j - 1;
            if (i > 0) {
                dp[i][j] = dp[i][j] || (dp[i - 1][j] && s1[i - 1] === s3[p]);
            }
            if (j > 0) {
                dp[i][j] = dp[i][j] || (dp[i][j - 1] && s2[j - 1] === s3[p]);
            }
        }
    }
    return dp[s1Len][s2Len];
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));