function calculate(s: string): number {
    let stack: number[] = [];
    let sign = 1;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            continue;
        } else if (s[i] === "+") {
            sign = 1;
        } else if (s[i] === "-") {
            sign = -1;
        } else if (s[i] === "(") {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (s[i] === ")") {
            result = result * stack.pop()! + stack.pop()!;
        } else {
            let num = 0;
            while (s[i] >= "0" && s[i] <= "9") {
                num = num * 10 + s[i].charCodeAt(0) - "0".charCodeAt(0);
                i++;
            }
            i--;
            result += sign * num;
        }
    }
    return result;
};

console.log(calculate("1 + 1"));