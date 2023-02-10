function isMatch(s: string, p: string): boolean {
    let sIndex = 0;
    let pIndex = 0;
    let sStarIndex = -1;
    let pStarIndex = -1;

    while (sIndex < s.length) {
        if (pIndex < p.length && (p[pIndex] === '?' || p[pIndex] === s[sIndex])) {
            sIndex++;
            pIndex++;
        } else if (pIndex < p.length && p[pIndex] === '*') {
            sStarIndex = sIndex;
            pStarIndex = pIndex;
            pIndex++;
        } else if (pStarIndex !== -1) {
            sStarIndex++;
            sIndex = sStarIndex;
            pIndex = pStarIndex + 1;
        } else {
            return false;
        }
    }

    while (pIndex < p.length && p[pIndex] === '*') {
        pIndex++;
    }

    return pIndex === p.length;
};

console.log(isMatch('aa', 'a')); // false