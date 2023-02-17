function findWords(board: string[][], words: string[]): string[] {
    let WORD_KEY = '$';
    let trie: any = {};

    for (let word of words) {
        let node: any = trie;
        for (let letter of word) {
            node = node[letter] || (node[letter] = {});
        }
        node[WORD_KEY] = word;
        console.log(node);
    }

    let rowNum = board.length;
    let colNum = board[0].length;
    let matchedWords: string[] = [];

    const backtracking = (row: number, col: number, parent: any): void => {
        let letter = board[row][col];
        let currNode = parent[letter];
        if (currNode[WORD_KEY]) {
            matchedWords.push(currNode[WORD_KEY]);
            currNode[WORD_KEY] = false;
        }
        board[row][col] = '#';
        for (let [rowOffset, colOffset] of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {
            let newRow = row + rowOffset;
            let newCol = col + colOffset;
            if (newRow < 0 || newRow >= rowNum || newCol < 0 || newCol >= colNum) {
                continue;
            }
            if (!currNode[board[newRow][newCol]]) {
                continue;
            }
            backtracking(newRow, newCol, currNode);
        }
        board[row][col] = letter;
        if (!Object.keys(currNode).length) {
            parent.pop(letter);
        }
    }

    for (let row = 0; row < rowNum; row++) {
        for (let col = 0; col < colNum; col++) {
            if (trie[board[row][col]]) {
                backtracking(row, col, trie);
            }
        }
    }

    return matchedWords;
};

console.log(findWords([
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"]
], ["oath", "pea", "eat", "rain"]));
console.log(findWords([
    ["o", "a", "b", "n"],
    ["o", "t", "a", "e"],
    ["a", "h", "k", "r"],
    ["a", "f", "l", "v"]
], ["oa", "oa", "oaa"]));