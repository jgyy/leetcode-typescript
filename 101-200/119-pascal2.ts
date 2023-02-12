function getRow(rowIndex: number): number[] {
    if (rowIndex === 0) {
        return [1];
    }
    if (rowIndex === 1) {
        return [1, 1];
    }
    let prevRow = [1, 1];
    for (let i = 2; i <= rowIndex; i++) {
        let row = [];
        row[0] = 1;
        row[i] = 1;
        for (let j = 1; j < i; j++) {
            row[j] = prevRow[j - 1] + prevRow[j];
        }
        prevRow = row;
    }
    return prevRow;
};

console.log(getRow(0));