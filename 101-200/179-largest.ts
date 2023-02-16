function largestNumber(nums: number[]): string {
    const compare = (a: string, b: string): number => {
        const ab = a + b;
        const ba = b + a;
        if (ab > ba) {
            return -1;
        }
        if (ab < ba) {
            return 1;
        }
        return 0;
    };

    const arr = nums.map((num) => num.toString());
    arr.sort(compare);
    const ret = arr.join('');
    return ret[0] === '0' ? '0' : ret;
};

console.log(largestNumber([10, 2]));