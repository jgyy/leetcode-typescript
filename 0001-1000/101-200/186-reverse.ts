/**
 Do not return anything, modify s in-place instead.
 */
function reverseWords(s: string[]): void {
    const reverse = (start: number, end: number): void => {
        while (start < end) {
            const temp = s[start];
            s[start] = s[end];
            s[end] = temp;
            start++;
            end--;
        }
    };
    reverse(0, s.length - 1);
    let start = 0;
    let end = 0;
    while (end < s.length) {
        if (s[end] === ' ') {
            reverse(start, end - 1);
            start = end + 1;
        }
        end++;
    }
    reverse(start, end - 1);
    console.log(s);
};

reverseWords(["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"]);