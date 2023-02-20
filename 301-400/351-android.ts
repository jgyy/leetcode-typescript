function numberOfPatterns(m: number, n: number): number {
    const visited = new Array(10).fill(false);
    let result = 0;
    const jump = new Array(10).fill(0).map(_ => new Array(10).fill(0));
    jump[1][3] = jump[3][1] = 2;
    jump[1][7] = jump[7][1] = 4;
    jump[3][9] = jump[9][3] = 6;
    jump[7][9] = jump[9][7] = 8;
    jump[1][9] = jump[9][1] = jump[3][7] = jump[7][3] = jump[2][8] = jump[8][2] = jump[4][6] = jump[6][4] = 5;
    for (let i = m; i <= n; i++) {
        result += dfs(1, i - 1) * 4;
        result += dfs(2, i - 1) * 4;
        result += dfs(5, i - 1);
    }
    return result;

    function dfs(number: number, remain: number) {
        if (remain < 0) {
            return 0;
        }
        if (remain == 0) {
            return 1;
        }
        let result = 0;
        visited[number] = true;
        for (let i = 1; i <= 9; i++) {
            if (!visited[i] && (jump[number][i] == 0 || visited[jump[number][i]])) {
                result += dfs(i, remain - 1);
            }
        }
        visited[number] = false;
        return result;
    }
};

console.log(numberOfPatterns(1, 1));