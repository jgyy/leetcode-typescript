function letterCombinations(digits: string): string[] {
    const map = new Map([
        ["2", "abc"],
        ["3", "def"],
        ["4", "ghi"],
        ["5", "jkl"],
        ["6", "mno"],
        ["7", "pqrs"],
        ["8", "tuv"],
        ["9", "wxyz"],
    ]);
    const result: string[] = [];
    const dfs = (index: number, str: string) => {
        if (index === digits.length) {
            result.push(str);
            return;
        }
        const letters = map.get(digits[index]);
        if (!letters) {
            return;
        }
        for (const letter of letters) {
            dfs(index + 1, str + letter);
        }
    };
    if (digits) {
        dfs(0, "");
    }
    return result;
};

console.log(letterCombinations("23"));