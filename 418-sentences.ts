function wordsTyping(sentence: string[], rows: number, cols: number): number {
    let s = sentence.join(' ') + ' ';
    let l = s.length;
    let start = 0;
    for (let i = 0; i < rows; i++) {
        start += cols;
        if (s[start % l] == ' ') {
            start++;
        } else {
            while (start > 0 && s[(start - 1) % l] != ' ') {
                start--;
            }
        }
    }
    return Math.floor(start / s.length);
};

console.log(wordsTyping(["hello", "world"], 2, 8));