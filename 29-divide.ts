function divide(dividend: number, divisor: number): number {
    const maxInt = 2147483647;
    const minInt = -2147483648;

    if (dividend == minInt && divisor == -1) {
        return maxInt;
    }

    let negatives = 2;
    if (dividend > 0) {
        negatives -= 1;
        dividend = -dividend;
    }
    if (divisor > 0) {
        negatives -= 1;
        divisor = -divisor;
    }

    let quotient = 0;
    while (dividend - divisor <= 0) {
        quotient -= 1
        dividend -= divisor
    }

    return negatives != 1 ? -quotient : quotient;
};

console.log(divide(10, 3));
console.log(divide(-2147483648, -1));
console.log(divide(2147483647, 2));