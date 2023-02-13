/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const m = board.length;
    const n = board[0].length;

    const dfs = (i: number, j: number) => {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== "O") {
            return;
        }
        board[i][j] = "A";
        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    };

    for (let i = 0; i < m; i++) {
        dfs(i, 0);
        dfs(i, n - 1);
    }

    for (let j = 0; j < n; j++) {
        dfs(0, j);
        dfs(m - 1, j);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "A") {
                board[i][j] = "O";
            } else if (board[i][j] === "O") {
                board[i][j] = "X";
            }
        }
    }
    console.log(board);
};

solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"]
]);