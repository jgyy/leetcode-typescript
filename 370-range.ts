function getModifiedArray(length: number, updates: number[][]): number[] {
    const result = new Array(length).fill(0);
    for (let [start, end, value] of updates) {
        result[start] += value;
        if (end + 1 < length) {
            result[end + 1] -= value;
        }
    }
    for (let i = 1; i < length; i++) {
        result[i] += result[i - 1];
    }
    return result;
};

console.log(getModifiedArray(5, [[1, 3, 2], [2, 4, 3], [0, 2, -2]]));