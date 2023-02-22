function decodeString(s: string): string {
    const stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            stack.push(s[i]);
        } else {
            let str = '';
            while (stack[stack.length - 1] !== '[') {
                str = stack.pop() + str;
            }
            stack.pop();
            let num = '';
            while (stack.length && !isNaN(Number(stack[stack.length - 1]))) {
                num = stack.pop() + num;
            }
            stack.push(str.repeat(Number(num)));
        }
    }
    return stack.join('');
};

console.log(decodeString('3[a]2[bc]'));