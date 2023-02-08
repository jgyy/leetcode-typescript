function longestValidParentheses(s: string): number {
    const stack: number[] = [-1];
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                result = Math.max(result, i - stack[stack.length - 1]);
            }
        }
    }
    return result;
};

console.log(longestValidParentheses("(()")); // 2