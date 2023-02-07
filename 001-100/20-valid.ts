function isValid(s: string): boolean {
    const map = new Map([
        ["(", ")"],
        ["[", "]"],
        ["{", "}"],
    ]);
    const stack: string[] = [];
    for (const c of s) {
        if (map.has(c)) {
            stack.push(c);
        } else {
            const left = stack.pop();
            if (!left || map.get(left) !== c) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid("()"));