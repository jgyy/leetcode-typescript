/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
class RandomizedSet {
    list: number[];
    dict: Map<number, number>;

    constructor() {
        this.list = [];
        this.dict = new Map();
    }

    insert(val: number): boolean {
        if (this.dict.has(val)) {
            return false;
        }
        this.list.push(val);
        this.dict.set(val, this.list.length - 1);
        return true;
    }

    remove(val: number): boolean {
        if (!this.dict.has(val)) {
            return false;
        }
        const index = this.dict.get(val)!;
        this.list[index] = this.list[this.list.length - 1];
        this.dict.set(this.list[index], index);
        this.list.pop();
        this.dict.delete(val);
        return true;
    }

    getRandom(): number {
        return this.list[Math.floor(Math.random() * this.list.length)];
    }
}

const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1));
console.log(randomizedSet.remove(2));
console.log(randomizedSet.insert(2));
console.log(randomizedSet.getRandom());
console.log(randomizedSet.remove(1));
console.log(randomizedSet.insert(2));
console.log(randomizedSet.getRandom());
