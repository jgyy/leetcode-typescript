function countAndSay(n: number): string {
    if (n === 1) {
        return "1";
    }
    const str = countAndSay(n - 1);
    let result = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += `${count}${str[i]}`;
            count = 1;
        }
    }
    return result;
};

console.log(countAndSay(1)); // 1