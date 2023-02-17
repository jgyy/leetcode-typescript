function computeArea(
    ax1: number, ay1: number, ax2: number, ay2: number,
    bx1: number, by1: number, bx2: number, by2: number
): number {
    let areaA = (ax2 - ax1) * (ay2 - ay1);
    let areaB = (bx2 - bx1) * (by2 - by1);
    let area = areaA + areaB;

    if (
        ax2 <= bx1 || bx2 <= ax1 ||
        ay2 <= by1 || by2 <= ay1
    ) {
        return area;
    }

    let x1 = Math.max(ax1, bx1);
    let y1 = Math.max(ay1, by1);
    let x2 = Math.min(ax2, bx2);
    let y2 = Math.min(ay2, by2);

    let overlap = (x2 - x1) * (y2 - y1);
    return area - overlap;
};

console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2));