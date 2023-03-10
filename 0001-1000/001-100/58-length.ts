function lengthOfLastWord(s: string): number {
    let res = 0;
    let i = s.length - 1;
    while (i >= 0 && s[i] === ' ') {
        i--;
    }
    while (i >= 0 && s[i] !== ' ') {
        res++;
        i--;
    }
    return res;
};

console.log(lengthOfLastWord('Hello World'));