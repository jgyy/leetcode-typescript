/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
class Vector2D {
    nums: number[];
    position: number;

    constructor(vec: number[][]) {
        this.nums = [];
        for (let i = 0; i < vec.length; i++) {
            for (let j = 0; j < vec[i].length; j++) {
                this.nums.push(vec[i][j]);
            }
        }
        this.position = 0;
    }

    next(): number {
        return this.nums[this.position++];
    }

    hasNext(): boolean {
        return this.position < this.nums.length;
    }
}

const vec2d = new Vector2D([[1, 2], [3], [4]]);
console.log(vec2d.next());
console.log(vec2d.next());
console.log(vec2d.next());
console.log(vec2d.next());
console.log(vec2d.hasNext());
console.log(vec2d.next());
console.log(vec2d.hasNext());
