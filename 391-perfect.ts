function isRectangleCover(rectangles: number[][]): boolean {
    if (rectangles.length === 0) return false;
    let minX = Number.MAX_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;
    let maxX = Number.MIN_SAFE_INTEGER;
    let maxY = Number.MIN_SAFE_INTEGER;
    let area = 0;

    const set = new Set();
    for (let rectangle of rectangles) {
        const [x1, y1, x2, y2] = rectangle;
        area += (x2 - x1) * (y2 - y1);
        minX = Math.min(minX, x1);
        minY = Math.min(minY, y1);
        maxX = Math.max(maxX, x2);
        maxY = Math.max(maxY, y2);

        const key1 = `${x1},${y1}`;
        const key2 = `${x1},${y2}`;
        const key3 = `${x2},${y1}`;
        const key4 = `${x2},${y2}`;

        if (set.has(key1)) set.delete(key1);
        else set.add(key1);
        if (set.has(key2)) set.delete(key2);
        else set.add(key2);
        if (set.has(key3)) set.delete(key3);
        else set.add(key3);
        if (set.has(key4)) set.delete(key4);
        else set.add(key4);
    }

    if (!set.has(`${minX},${minY}`) || !set.has(`${minX},${maxY}`) || !set.has(`${maxX},${minY}`) || !set.has(`${maxX},${maxY}`) || set.size !== 4) {
        return false;
    }

    return area === (maxX - minX) * (maxY - minY);
};

console.log(isRectangleCover([[1, 1, 3, 3], [3, 1, 4, 2], [3, 2, 4, 4], [1, 3, 2, 4], [2, 3, 3, 4]]));