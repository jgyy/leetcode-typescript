function addBinary(a: string, b: string): string {
    let res = "";
    let carry = 0;
    let p1 = a.length - 1;
    let p2 = b.length - 1;
    while (p1 >= 0 || p2 >= 0) {
        const x1 = p1 >= 0 ? parseInt(a[p1]) : 0;
        const x2 = p2 >= 0 ? parseInt(b[p2]) : 0;
        const value = (x1 + x2 + carry) % 2;
        carry = Math.floor((x1 + x2 + carry) / 2);
        res = value + res;
        p1--;
        p2--;
    }
    return carry == 0 ? res : carry + res;
};

console.log(addBinary("11", "1"));