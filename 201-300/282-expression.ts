function addOperators(num: string, target: number): string[] {
    const result: string[] = [];
    const backtrack = (path: string, index: number, value: number, prev: number) => {
        if (index === num.length) {
            if (value === target) {
                result.push(path);
            }
            return;
        }
        for (let i = index; i < num.length; i++) {
            const str = num.substring(index, i + 1);
            if (str.length > 1 && str[0] === "0") {
                break;
            }
            const curr = Number(str);
            if (index === 0) {
                backtrack(path + curr, i + 1, curr, curr);
            } else {
                backtrack(path + "+" + curr, i + 1, value + curr, curr);
                backtrack(path + "-" + curr, i + 1, value - curr, -curr);
                backtrack(path + "*" + curr, i + 1, value - prev + prev * curr, prev * curr);
            }
        }
    };
    backtrack("", 0, 0, 0);
    return result;
};

console.log(addOperators("123", 6)); // ["1+2+3", "1*2*3"]