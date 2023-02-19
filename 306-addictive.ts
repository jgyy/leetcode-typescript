function isAdditiveNumber(num: string): boolean {
    if (num.length < 3) {
        return false;
    }
    const n = num.length;
    for (let i = 1; i <= n / 2; i++) {
        for (let j = 1; j <= (n - i) / 2; j++) {
            if (check(i, j)) {
                return true;
            }
        }
    }
    return false;

    function check(i: number, j: number): boolean {
        if (num[0] === "0" && i > 1) {
            return false;
        }
        if (num[i] === "0" && j > 1) {
            return false;
        }
        let sum: string;
        let x1 = BigInt(num.slice(0, i));
        let x2 = BigInt(num.slice(i, i + j));
        let start = i + j;
        while (start !== n) {
            x2 = x1 + x2;
            x1 = x2 - x1;
            sum = x2.toString();
            if (!num.startsWith(sum, start)) {
                return false;
            }
            start += sum.length;
        }
        return true;
    }
};

console.log(isAdditiveNumber("112358"));