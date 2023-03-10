function originalDigits(s: string): string {
    const counts = new Array(10).fill(0);
    for (const c of s) {
        if (c === 'z') {
            counts[0]++;
        } else if (c === 'w') {
            counts[2]++;
        } else if (c === 'u') {
            counts[4]++;
        } else if (c === 'x') {
            counts[6]++;
        } else if (c === 'g') {
            counts[8]++;
        } else if (c === 'o') {
            counts[1]++;
        } else if (c === 'r') {
            counts[3]++;
        } else if (c === 'f') {
            counts[5]++;
        } else if (c === 'v') {
            counts[7]++;
        } else if (c === 'i') {
            counts[9]++;
        }
    }
    counts[1] -= counts[0] + counts[2] + counts[4];
    counts[3] -= counts[0] + counts[4];
    counts[5] -= counts[4];
    counts[7] -= counts[5];
    counts[9] -= counts[5] + counts[6] + counts[8];
    let result = '';
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] > 0) {
            result += i.toString().repeat(counts[i]);
        }
    }
    return result;
};

console.log(originalDigits('owoztneoer'));