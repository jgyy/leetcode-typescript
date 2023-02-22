function lexicalOrder(n: number): number[] {
    const result: number[] = [];
    let current = 1;
    for (let i = 1; i <= n; i++) {
        result.push(current);
        if (current * 10 <= n) {
            current *= 10;
        } else {
            if (current >= n) {
                current = Math.floor(current / 10);
            }
            current += 1;
            while (current % 10 === 0) {
                current = Math.floor(current / 10);
            }
        }
    }
    return result;
};

console.log(lexicalOrder(13));