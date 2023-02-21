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

function depthSumInverse(nestedList: NestedInteger[]): number {
    const queue = [...nestedList];
    const depthSum = [];
    let depth = 0;
    let sum = 0;

    while (queue.length > 0) {
        const length = queue.length;
        sum = 0;

        for (let i = 0; i < length; i++) {
            const item = queue.shift();
            if (item!.isInteger()) {
                sum += item!.getInteger()!;
            } else {
                queue.push(...item!.getList());
            }
        }

        depthSum.push(sum);
        depth++;
    }

    let total = 0;
    for (let i = 0; i < depthSum.length; i++) {
        total += depthSum[i] * (depth - i);
    }

    return total;
};

const nestedInteger = new NestedInteger();
nestedInteger.add(new NestedInteger(1));
nestedInteger.add(new NestedInteger(1));
const nestedInteger2 = new NestedInteger();
nestedInteger2.add(new NestedInteger(2));
nestedInteger2.add(new NestedInteger(2));
nestedInteger.add(nestedInteger2);
console.log(depthSumInverse([nestedInteger]));
