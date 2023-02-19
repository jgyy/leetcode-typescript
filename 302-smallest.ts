function minArea(image: string[][], x: number, y: number): number {
    const rows = image.length;
    const cols = image[0].length;
    let left = cols;
    let right = 0;
    let up = rows;
    let down = 0;
    const dfs = (i: number, j: number) => {
        if (i < 0 || i >= rows || j < 0 || j >= cols || image[i][j] !== '1') {
            return;
        }
        image[i][j] = '0';
        left = Math.min(left, j);
        right = Math.max(right, j);
        up = Math.min(up, i);
        down = Math.max(down, i);
        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    };
    dfs(x, y);
    return (right - left + 1) * (down - up + 1);
};

console.log(minArea([["1"]], 0, 0));
console.log(minArea([["0", "0", "1", "0"], ["0", "1", "1", "0"], ["0", "1", "0", "0"]], 0, 2));