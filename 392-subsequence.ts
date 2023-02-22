function isSubsequence(s: string, t: string): boolean {
    let sPointer = 0;
    let tPointer = 0;

    while (tPointer < t.length) {
        if (s[sPointer] === t[tPointer]) {
            sPointer++;
        }
        tPointer++;
    }

    return sPointer === s.length;
};

console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('abc', ''));