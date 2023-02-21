function superPow(a: number, b: number[]): number {
    const mod = 1337;
    const pow = (a: number, k: number): number => {
        a %= mod;
        let result = 1;
        for (let i = 0; i < k; i++) {
            result = (result * a) % mod;
        }
        return result;
    };
    if (b.length === 0) {
        return 1;
    }
    const last = b.pop()!;
    return pow(superPow(a, b), 10) * pow(a, last) % mod;
};

console.log(superPow(2, [1, 0]));