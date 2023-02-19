function bulbSwitch(n: number): number {
    let result = 0;
    for (let i = 1; i * i <= n; i++) {
        result++;
    }
    return result;
};

console.log(bulbSwitch(3));