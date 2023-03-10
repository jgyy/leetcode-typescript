function strStr(haystack: string, needle: string): number {
    let i = 0;
    let j = 0;
    while (i < haystack.length && j < needle.length) {
        if (haystack[i] === needle[j]) {
            i += 1;
            j += 1;
        } else {
            i = i - j + 1;
            j = 0;
        }
    }
    if (j === needle.length) {
        return i - j;
    } else {
        return -1;
    }
};

console.log(strStr("hello", "ll"));