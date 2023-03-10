function rangeBitwiseAnd(left: number, right: number): number {
    let shift = 0;
    while (left < right) {
        left >>= 1;
        right >>= 1;
        shift += 1;
    }
    return left << shift;
};

console.log(rangeBitwiseAnd(5, 7));