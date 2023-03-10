/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 */
class NestedInteger364 {
    value: number;
    valueArray: NestedInteger364[];

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

    add(elem: NestedInteger364) {
        this.valueArray.push(elem);
    };

    getList(): NestedInteger364[] {
        return this.isInteger() ? [] : this.valueArray;
    };
};

function depthSumInverse(nestedList: NestedInteger364[]): number {
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

const nestedInteger364 = new NestedInteger364();
nestedInteger364.add(new NestedInteger364(1));
nestedInteger364.add(new NestedInteger364(1));
const nestedInteger3642 = new NestedInteger364();
nestedInteger3642.add(new NestedInteger364(2));
nestedInteger3642.add(new NestedInteger364(2));
nestedInteger364.add(nestedInteger3642);
console.log(depthSumInverse([nestedInteger364]));
