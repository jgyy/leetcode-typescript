/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */
class SnakeGame {
    snake: number[][];
    snakeSet: Set<string>;
    food: number[][];
    foodIndex: number;
    width: number;
    height: number;
    movement: { [key: string]: number[] };

    constructor(width: number, height: number, food: number[][]) {
        this.snake = [[0, 0]];
        this.snakeSet = new Set(["0-0"]);
        this.food = food;
        this.foodIndex = 0;
        this.width = width;
        this.height = height;
        this.movement = {
            "U": [-1, 0],
            "D": [1, 0],
            "L": [0, -1],
            "R": [0, 1]
        };
    }

    move(direction: string): number {
        const [headRow, headCol] = this.snake[0];
        const [rowDelta, colDelta] = this.movement[direction];
        const [nextRow, nextCol] = [headRow + rowDelta, headCol + colDelta];
        if (nextRow < 0 || nextRow >= this.height || nextCol < 0 || nextCol >= this.width) {
            return -1;
        }
        const tail = this.snake.pop()!;
        this.snakeSet.delete(`${tail[0]}-${tail[1]}`);
        if (this.snakeSet.has(`${nextRow}-${nextCol}`)) {
            return -1;
        }
        this.snake.unshift([nextRow, nextCol]);
        this.snakeSet.add(`${nextRow}-${nextCol}`);
        if (this.foodIndex < this.food.length && nextRow == this.food[this.foodIndex][0] && nextCol == this.food[this.foodIndex][1]) {
            this.foodIndex++;
            this.snake.push(tail);
            this.snakeSet.add(`${tail[0]}-${tail[1]}`);
        }
        return this.foodIndex;
    }
}

const s = new SnakeGame(3, 2, [[1, 2], [0, 1]]);
console.log(s.move("R"));
console.log(s.move("D"));
console.log(s.move("R"));
console.log(s.move("U"));
console.log(s.move("L"));
console.log(s.move("U"));
