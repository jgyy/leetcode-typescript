function countNumbersWithUniqueDigits(n: number): number {
    if (n == 0) return 1;
    if (n == 1) return 10;
    if (n == 2) return 91;
    if (n > 10) return countNumbersWithUniqueDigits(10);
    let result = 91;
    let base = 81;
    for (let i = 3; i <= n; i++) {
        base *= (11 - i);
        result += base;
    }
    return result;
};

console.log(countNumbersWithUniqueDigits(2));