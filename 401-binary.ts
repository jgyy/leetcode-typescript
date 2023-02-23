function readBinaryWatch(turnedOn: number): string[] {
    const result: string[] = [];

    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 60; j++) {
            const hour = i.toString(2).split("").filter((x) => x === "1").length;
            const minute = j.toString(2).split("").filter((x) => x === "1").length;

            if (hour + minute === turnedOn) {
                result.push(`${i}:${j < 10 ? "0" + j : j}`);
            }
        }
    }

    return result;
};

console.log(readBinaryWatch(1));