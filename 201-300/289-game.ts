/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
    const m = board.length;
    if (m === 0) {
        return;
    }
    const n = board[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let count = 0;
            for (let k = -1; k < 2; k++) {
                for (let l = -1; l < 2; l++) {
                    if (k === 0 && l === 0) {
                        continue;
                    }
                    if (i + k < 0 || i + k >= m || j + l < 0 || j + l >= n) {
                        continue;
                    }
                    if (board[i + k][j + l] === 1 || board[i + k][j + l] === 2) {
                        count++;
                    }
                }
            }
            if (board[i][j] === 0 && count === 3) {
                board[i][j] = 3;
            }
            if (board[i][j] === 1 && (count < 2 || count > 3)) {
                board[i][j] = 2;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] = board[i][j] % 2;
        }
    }
    console.log(board);
};

gameOfLife([[0, 1, 0],
[0, 0, 1],
[1, 1, 1],
[0, 0, 0]]); // [[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]]