function isReflected(points: number[][]): boolean {
    const set = new Set();
    let minX = Infinity;
    let maxX = -Infinity;
    for (const point of points) {
        minX = Math.min(minX, point[0]);
        maxX = Math.max(maxX, point[0]);
        set.add(point[0] + ',' + point[1]);
    }
    const sum = minX + maxX;
    for (const point of points) {
        if (!set.has(sum - point[0] + ',' + point[1])) {
            return false;
        }
    }
    return true;
};

console.log(isReflected([[1, 1], [-1, 1]]));