/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
    const rows = new Array(9).fill(0).map(() => new Set());
    const cols = new Array(9).fill(0).map(() => new Set());
    const boxes = new Array(9).fill(0).map(() => new Set());
    const spaces: [number, number][] = [];

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            const num = board[r][c];

            if (num !== ".") {
                rows[r].add(num);
                cols[c].add(num);
                boxes[boxIndex].add(num);
            } else {
                spaces.push([r, c]);
            }
        }
    }

    const isValid = (r: number, c: number, num: string): boolean => {
        const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
        return (
            !rows[r].has(num) &&
            !cols[c].has(num) &&
            !boxes[boxIndex].has(num)
        );
    };

    const backtrack = (index: number): boolean => {
        if (index === spaces.length) {
            return true;
        }

        const [r, c] = spaces[index];
        for (let i = 1; i <= 9; i++) {
            const str = i.toString();
            if (isValid(r, c, str)) {
                board[r][c] = str;
                rows[r].add(str);
                cols[c].add(str);
                boxes[Math.floor(r / 3) * 3 + Math.floor(c / 3)].add(str);

                if (backtrack(index + 1)) {
                    return true;
                }

                board[r][c] = ".";
                rows[r].delete(str);
                cols[c].delete(str);
                boxes[Math.floor(r / 3) * 3 + Math.floor(c / 3)].delete(str);
            }
        }

        return false;
    };

    backtrack(0);
    console.log(board);
};

solveSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]);