/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
class TicTacToe {
    rows: number[];
    cols: number[];
    diagonal: number;
    antiDiagonal: number;
    n: number;

    constructor(n: number) {
        this.rows = new Array(n).fill(0);
        this.cols = new Array(n).fill(0);
        this.diagonal = 0;
        this.antiDiagonal = 0;
        this.n = n;
    }

    move(row: number, col: number, player: number): number {
        let toAdd = player == 1 ? 1 : -1;
        this.rows[row] += toAdd;
        this.cols[col] += toAdd;
        if (row == col) {
            this.diagonal += toAdd;
        }
        if (col == (this.n - row - 1)) {
            this.antiDiagonal += toAdd;
        }
        if (Math.abs(this.rows[row]) == this.n ||
            Math.abs(this.cols[col]) == this.n ||
            Math.abs(this.diagonal) == this.n ||
            Math.abs(this.antiDiagonal) == this.n) {
            return player;
        }
        return 0;
    }
}

const t = new TicTacToe(3);
console.log(t.move(0, 0, 1));
console.log(t.move(0, 2, 2));
console.log(t.move(2, 2, 1));
console.log(t.move(1, 1, 2));
console.log(t.move(2, 0, 1));
console.log(t.move(1, 0, 2));
console.log(t.move(2, 1, 1));
