function reverseWords(s: string): string {
    const stack: string[] = [];
    let word = '';
    for (const c of s) {
        if (c === ' ') {
            if (word !== '') {
                stack.push(word);
                word = '';
            }
        } else {
            word += c;
        }
    }
    if (word !== '') {
        stack.push(word);
    }
    return stack.reverse().join(' ');
};

console.log(reverseWords("the sky is blue"));