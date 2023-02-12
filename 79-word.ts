function exist(board: string[][], word: string): boolean {
    const m = board.length;
    const n = board[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
    const check = (i: number, j: number, k: number): boolean => {
        if (board[i][j] !== word[k]) {
            return false;
        } else if (k === word.length - 1) {
            return true;
        }
        visited[i][j] = true;
        let result = false;
        for (const [dx, dy] of directions) {
            const x = i + dx;
            const y = j + dy;
            if (x >= 0 && x < m && y >= 0 && y < n && !visited[x][y]) {
                const flag = check(x, y, k + 1);
                if (flag) {
                    result = true;
                    break;
                }
            }
        }
        visited[i][j] = false;
        return result;
    };
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (check(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABCCED'));