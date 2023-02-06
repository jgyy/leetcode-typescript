function myAtoi(s: string): number {
    const num = parseInt(s, 10);
    if (isNaN(num)) {
        return 0;
    }
    if (num > 2147483647) {
        return 2147483647;
    }
    if (num < -2147483648) {
        return -2147483648;
    }
    return num;
};

console.log(myAtoi("42")); // 42