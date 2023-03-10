function multiply(num1: string, num2: string): string {
    const m = num1.length;
    const n = num2.length;
    const pos = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        const x = +num1[i];
        for (let j = n - 1; j >= 0; j--) {
            const y = +num2[j];
            const sum = pos[i + j + 1] + x * y;
            pos[i + j + 1] = sum % 10;
            pos[i + j] += Math.floor(sum / 10);
        }
    }

    let str = "";
    for (let p of pos) {
        if (!(str.length === 0 && p === 0)) {
            str += p;
        }
    }

    return str.length === 0 ? "0" : str;
};

console.log(multiply("123", "456"));
console.log(multiply("2", "3"));