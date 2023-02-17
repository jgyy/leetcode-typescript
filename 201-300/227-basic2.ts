function calculate(s: string): number {
    const stack: number[] = [];
    let sign = '+';
    let num = 0;
    const n = s.length;
    for (let i = 0; i < n; i++) {
        if (!isNaN(Number(s[i])) && s[i] !== ' ') {
            num = num * 10 + Number(s[i]);
        }
        if (isNaN(Number(s[i])) && s[i] !== ' ' || i === n - 1) {
            switch (sign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop()! * num);
                    break;
                case '/':
                    stack.push(Math.trunc(stack.pop()! / num));
                    break;
            }
            sign = s[i];
            num = 0;
        }
    }
    let ans = 0;
    while (stack.length) {
        ans += stack.pop()!;
    }
    return ans;
};

console.log(calculate('1+1'));
console.log(calculate('3+2*2'));
console.log(calculate('14-3/2'));