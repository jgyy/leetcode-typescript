function maxPoints(points: number[][]): number {
    if (points.length < 3) {
        return points.length;
    }
    let res = 0;
    const gcd = (a: number, b: number): number => {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    };
    for (let i = 0; i < points.length; i++) {
        const map: Map<string, number> = new Map();
        let same = 0;
        for (let j = i + 1; j < points.length; j++) {
            const x = points[j][0] - points[i][0];
            const y = points[j][1] - points[i][1];
            if (x === 0 && y === 0) {
                same++;
                continue;
            }
            const g = gcd(x, y);
            const x1 = x / g;
            const y1 = y / g;
            const key = `${x1}_${y1}`;
            map.set(key, (map.get(key) || 0) + 1);
        }
        let max = 0;
        for (const [_, v] of map) {
            max = Math.max(v, max);
        }
        res = Math.max(res, max + same + 1);
    }
    return res;
};

console.log(maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]));
