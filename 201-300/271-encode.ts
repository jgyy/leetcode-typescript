/**
 * Encodes a list of strings to a single string.
 */
function encode(strs: string[]): string {
    return strs.map((str) => `${str.length}|${str}`).join("");
};

/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
    const result: string[] = [];
    let i = 0;
    while (i < s.length) {
        const pipeIndex = s.indexOf("|", i);
        const length = Number(s.substring(i, pipeIndex));
        const str = s.substring(pipeIndex + 1, pipeIndex + 1 + length);
        result.push(str);
        i = pipeIndex + 1 + length;
    }
    return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
console.log(decode(encode(["wrt", "wrf", "er", "ett", "rftt"])));