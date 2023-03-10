function hammingWeight(n: number): number {
    let result = 0;
    while (n !== 0) {
        result++;
        n = n & (n - 1);
    }
    return result;
};

console.log(hammingWeight(0o1011));