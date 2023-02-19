function removeDuplicateLetters(s: string): string {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    const stack = [];
    const visited = new Set();
    for (let i = 0; i < s.length; i++) {
        if (!visited.has(s[i])) {
            while (
                stack.length &&
                s[i] < stack[stack.length - 1] &&
                map.get(stack[stack.length - 1]) > 0
            ) {
                visited.delete(stack[stack.length - 1]);
                stack.pop();
            }
            stack.push(s[i]);
            visited.add(s[i]);
        }
        map.set(s[i], map.get(s[i]) - 1);
    }
    return stack.join("");
};

console.log(removeDuplicateLetters("bcabc"));