function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;

    const rows: string[] = [];
    for (let i = 0; i < Math.min(numRows, s.length); i++) {
        rows.push('');
    }

    let curRow = 0;
    let goingDown = false;

    for (const c of s) {
        rows[curRow] += c;
        if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
        curRow += goingDown ? 1 : -1;
    }

    let ret = '';
    for (const row of rows) ret += row;
    return ret;
};

console.log(convert('PAYPALISHIRING', 3)); // PAHNAPLSIIGYIR