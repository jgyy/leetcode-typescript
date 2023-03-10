/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 */
class NestedInteger {
    value: number;
    valueArray: NestedInteger[];

    constructor(value?: number) {
        this.value = value ? value : 0;
        this.valueArray = [];
    };

    isInteger(): boolean {
        return this.valueArray.length === 0;
    };

    getInteger(): number | null {
        return this.isInteger() ? this.value : null;
    };

    setInteger(value: number) {
        this.value = value;
        this.valueArray = [];
    };

    add(elem: NestedInteger) {
        this.valueArray.push(elem);
    };

    getList(): NestedInteger[] {
        return this.isInteger() ? [] : this.valueArray;
    };
};

function deserialize(s: string): NestedInteger {
    function nestedInteger(x: number | number[]): NestedInteger {
        if (typeof x === 'number') {
            return new NestedInteger(x);
        }
        const lst = new NestedInteger();
        for (const y of x) {
            lst.add(nestedInteger(y));
        }
        return lst;
    }
    return nestedInteger(eval(s));
};

console.log(deserialize('324'));
console.log(deserialize('[123,[456,[789]]]'));
