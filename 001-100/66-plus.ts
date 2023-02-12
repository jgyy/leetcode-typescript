function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if (digits[i] !== 0) {
            return digits;
        }
    }
    digits = [...Array(digits.length + 1)].map(() => 0);
    digits[0] = 1;
    return digits;
};

console.log(plusOne([1, 2, 3]));