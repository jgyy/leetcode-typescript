function wordSquares(words: string[]): string[][] {
    const map: { [key: string]: string[] } = {};
    const result: string[][] = [];
    const len = words[0].length;

    for (let word of words) {
        for (let i = 0; i < len; i++) {
            let key = word.substring(0, i);
            if (!map[key]) map[key] = [];
            map[key].push(word);
        }
    }

    let dfs = (arr: string[]) => {
        if (arr.length === len) {
            result.push(arr);
            return;
        }

        let key = "";
        for (let word of arr) {
            key += word[arr.length];
        }

        if (map[key]) {
            for (let word of map[key]) {
                dfs(arr.concat(word));
            }
        }
    }

    for (let word of words) {
        dfs([word]);
    }

    return result;
};

console.log(wordSquares(["area", "lead", "wall", "lady", "ball"])); // [["wall","area","lead","lady"],["ball","area","lead","lady"]]