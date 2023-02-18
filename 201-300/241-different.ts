function diffWaysToCompute(expression: string): number[] {
    const result: number[] = [];
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '+' || expression[i] === '-' || expression[i] === '*') {
            const left = diffWaysToCompute(expression.substring(0, i));
            const right = diffWaysToCompute(expression.substring(i + 1));
            for (const l of left) {
                for (const r of right) {
                    switch (expression[i]) {
                        case '+':
                            result.push(l + r);
                            break;
                        case '-':
                            result.push(l - r);
                            break;
                        case '*':
                            result.push(l * r);
                            break;
                    }
                }
            }
        }
    }
    if (result.length === 0) {
        result.push(Number(expression));
    }
    return result;
};

console.log(diffWaysToCompute('2-1-1'));