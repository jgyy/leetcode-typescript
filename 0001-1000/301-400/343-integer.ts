function integerBreak(n: number): number {
    if (n === 2) return 1;
    if (n === 3) return 2;

    let result = 1;
    while (n > 4) {
        result *= 3;
        n -= 3;
    }
    result *= n;
    return result;
};

console.log(integerBreak(2));