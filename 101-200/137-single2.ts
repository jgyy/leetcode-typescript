function singleNumber(nums: number[]): number {
    const map = new Map<number, number>();
    for (const num of nums) {
        if (map.get(num) === undefined) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num)! + 1);
        }
    }
    for (const [key, value] of map) {
        if (value === 1) {
            return key;
        }
    }
    return -1;
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));