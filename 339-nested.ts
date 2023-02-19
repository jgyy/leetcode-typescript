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

function depthSum(nestedList: NestedInteger[]): number {
    let sum = 0;
    const dfs = (nestedList: NestedInteger[], depth: number) => {
        for (let i = 0; i < nestedList.length; i++) {
            if (nestedList[i].isInteger()) {
                sum += nestedList[i].getInteger()! * depth;
            } else {
                dfs(nestedList[i].getList(), depth + 1);
            }
        }
    }
    dfs(nestedList, 1);
    return sum;
};

const nestedList = [new NestedInteger(1), new NestedInteger(1)];
nestedList[0].add(new NestedInteger(1));
nestedList[1].add(new NestedInteger(1));
console.log(depthSum(nestedList));
