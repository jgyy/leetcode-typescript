function findRepeatedDnaSequences(s: string): string[] {
    let L = 10;
    let n = s.length;
    let seen = new Set();
    let output: Set<string> = new Set();

    for (let start = 0; start < n - L + 1; start++) {
        let tmp = s.substring(start, start + L);
        if (seen.has(tmp)) output.add(tmp);
        seen.add(tmp);
    }
    return Array.from(output);
};

console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));
console.log(findRepeatedDnaSequences('AAAAAAAAAAAAA'));