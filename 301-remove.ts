function removeInvalidParentheses(s: string): string[] {
    const isValid = (s: string): boolean => {
        let count = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                count++;
            } else if (s[i] === ')') {
                count--;
            }
            if (count < 0) {
                return false;
            }
        }
        return count === 0;
    };
    const result: string[] = [];
    if (s.length === 0) {
        return result;
    }
    const queue: string[] = [];
    const visited: Set<string> = new Set();
    let found = false;
    queue.push(s);
    visited.add(s);
    while (queue.length) {
        const str = queue.shift()!;
        if (isValid(str)) {
            result.push(str);
            found = true;
        }
        if (found) {
            continue;
        }
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== '(' && str[i] !== ')') {
                continue;
            }
            const newStr = str.slice(0, i) + str.slice(i + 1);
            if (!visited.has(newStr)) {
                queue.push(newStr);
                visited.add(newStr);
            }
        }
    }
    return result;
};

console.log(removeInvalidParentheses('()())()')); // ["()()()", "(())()"]