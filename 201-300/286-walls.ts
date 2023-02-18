/**
 Do not return anything, modify rooms in-place instead.
 */
function wallsAndGates(rooms: number[][]): void {
    const m = rooms.length;
    if (m === 0) {
        return;
    }
    const n = rooms[0].length;
    const queue: number[][] = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rooms[i][j] === 0) {
                queue.push([i, j]);
            }
        }
    }
    while (queue.length > 0) {
        const [i, j] = queue.shift()!;
        if (i > 0 && rooms[i - 1][j] === 2147483647) {
            rooms[i - 1][j] = rooms[i][j] + 1;
            queue.push([i - 1, j]);
        }
        if (i < m - 1 && rooms[i + 1][j] === 2147483647) {
            rooms[i + 1][j] = rooms[i][j] + 1;
            queue.push([i + 1, j]);
        }
        if (j > 0 && rooms[i][j - 1] === 2147483647) {
            rooms[i][j - 1] = rooms[i][j] + 1;
            queue.push([i, j - 1]);
        }
        if (j < n - 1 && rooms[i][j + 1] === 2147483647) {
            rooms[i][j + 1] = rooms[i][j] + 1;
            queue.push([i, j + 1]);
        }
    }
    console.log(rooms);
};

wallsAndGates([[2147483647, -1, 0, 2147483647],
[2147483647, 2147483647, 2147483647, -1],
[2147483647, -1, 2147483647, -1],
[0, -1, 2147483647, 2147483647]]); // [[3, -1, 0, 1], [2, 2, 1, -1], [1, -1, 2, -1], [0, -1, 3, 4]]