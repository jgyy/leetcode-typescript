function lengthLongestPath(input: string): number {
    const map: { [k: number]: number } = {};
    let maxLen = 0;

    for (let line of input.split('\n')) {
        const depth = (line.match(/\t/g) || []).length;
        map[depth] = line.length - depth + (map[depth - 1] || 0);
        if (/\./.test(line)) maxLen = Math.max(maxLen, depth + map[depth]);
    }
    return maxLen;
};

console.log(lengthLongestPath("dir"));
console.log(lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"));