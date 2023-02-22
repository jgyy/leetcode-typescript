/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
class RandomizedCollection {
    map: { [key: number]: number[] };
    array: number[][];

    constructor() {
        this.map = {};
        this.array = [];
    }

    insert(val: number): boolean {
        let res = true;
        if (this.map[val] !== undefined) res = false;
        this.map[val] = this.map[val] || [];
        this.map[val].push(this.array.length);
        this.array.push([val, this.map[val].length - 1]);
        return res;
    }

    remove(val: number): boolean {
        if (this.map[val] === undefined) return false;
        const last = this.array[this.array.length - 1];
        this.array[this.map[val][this.map[val].length - 1]] = last;
        this.map[last[0]][last[1]] = this.map[val][this.map[val].length - 1];
        this.array.pop();
        this.map[val].pop();
        if (this.map[val].length === 0) delete this.map[val];
        return true;
    }

    getRandom(): number {
        return this.array[Math.floor(Math.random() * this.array.length)][0];
    }
}

const randomizedCollection = new RandomizedCollection();
console.log(randomizedCollection.insert(1));
console.log(randomizedCollection.insert(1));
console.log(randomizedCollection.insert(2));
console.log(randomizedCollection.getRandom());
console.log(randomizedCollection.remove(1));
console.log(randomizedCollection.getRandom());
