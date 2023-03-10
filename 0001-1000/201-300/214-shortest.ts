function shortestPalindrome(s: string): string {
    let i = 0;
    let j = s.length - 1;
    while (j >= 0) {
        if (s[i] === s[j]) {
            i++;
        }
        j--;
    }
    if (i === s.length) {
        return s;
    }
    let remain = s.slice(i);
    remain = remain.split("").reverse().join("");
    return remain + shortestPalindrome(s.slice(0, i)) + s.slice(i);
};

console.log(shortestPalindrome("aacecaaa"));