function solveNQueens(n: number): string[][] {
    const result: string[][] = [];
    const board: string[][] = Array(n).fill(0).map(() => Array(n).fill('.'));
    const isValid = (board: string[][], row: number, col: number) => {
        for (let i = 0; i < board.length; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    };
    const backtrack = (board: string[][], row: number) => {
        if (row === board.length) {
            result.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < board.length; col++) {
            if (!isValid(board, row, col)) continue;
            board[row][col] = 'Q';
            backtrack(board, row + 1);
            board[row][col] = '.';
        }
    };
    backtrack(board, 0);
    return result;
};

console.log(solveNQueens(4));