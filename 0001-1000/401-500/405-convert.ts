function toHex(num: number): string {
    if (num === 0) {
        return "0";
    }

    const map = new Map<number, string>([
        [0, "0"],
        [1, "1"],
        [2, "2"],
        [3, "3"],
        [4, "4"],
        [5, "5"],
        [6, "6"],
        [7, "7"],
        [8, "8"],
        [9, "9"],
        [10, "a"],
        [11, "b"],
        [12, "c"],
        [13, "d"],
        [14, "e"],
        [15, "f"]
    ]);
    const result: string[] = [];
    let temp = num;

    while (temp !== 0 && result.length < 8) {
        const digit = temp & 15;
        result.push(map.get(digit)!);
        temp >>>= 4;
    }

    return result.reverse().join("");
};

console.log(toHex(26));