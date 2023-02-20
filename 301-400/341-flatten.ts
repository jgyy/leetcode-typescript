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

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */
class NestedIterator {
    private integers: number[];
    private position: number;

    constructor(nestedList: NestedInteger[]) {
        this.integers = [];
        this.position = 0;

        const flatten = (list: NestedInteger[]) => {
            for (let i = 0; i < list.length; i++) {
                const nestedInteger = list[i];
                if (nestedInteger.isInteger()) {
                    this.integers.push(nestedInteger.getInteger()!);
                } else {
                    flatten(nestedInteger.getList());
                }
            }
        };

        flatten(nestedList);
    }

    hasNext(): boolean {
        return this.position < this.integers.length;
    }

    next(): number {
        return this.integers[this.position++];
    }
}

const nestedList = [new NestedInteger(1), new NestedInteger(2), new NestedInteger(3)];
const nestedIterator = new NestedIterator(nestedList);
const a: number[] = [];
while (nestedIterator.hasNext()) a.push(nestedIterator.next());
console.log(a);
