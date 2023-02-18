function hIndex(citations: number[]): number {
    citations.sort((a, b) => a - b);
    let i = 0;
    while (i < citations.length && citations[citations.length - 1 - i] > i) {
        i++;
    }
    return i;
};

console.log(hIndex([3, 0, 6, 1, 5])); // 3