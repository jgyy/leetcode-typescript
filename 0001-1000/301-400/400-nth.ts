function findNthDigit(n: number): number {
    let digit = 1;
    let start = 1;
    let count = 9;
    while (n > count) {
        n -= count;
        digit += 1;
        start *= 10;
        count = 9 * start * digit;
    }
    const num = start + Math.floor((n - 1) / digit);
    return parseInt((num + '').charAt((n - 1) % digit));
};

console.log(findNthDigit(3));