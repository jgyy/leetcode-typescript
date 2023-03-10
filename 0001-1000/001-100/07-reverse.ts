function reverse(x: number): number {
    let result = 0;
    while (x !== 0) {
        result = result * 10 + (x % 10);
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
    }
    return result > 2 ** 31 - 1 || result < -(2 ** 31) ? 0 : result;
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(1534236469)); // 0