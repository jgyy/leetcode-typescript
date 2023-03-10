function validWordSquare(words: string[]): boolean {
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[j] === undefined || words[j][i] === undefined || words[i][j] !== words[j][i]) {
                return false;
            }
        }
    }
    return true;
};

console.log(validWordSquare(["abcd", "bnrt", "crmy", "dtye"])); // true