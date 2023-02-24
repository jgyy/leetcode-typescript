function addStrings(num1: string, num2: string): string {
    let res = '';
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
    while (i >= 0 || j >= 0) {
        let temp = 0;
        if (i >= 0 && j >= 0) {
            temp = parseInt(num1[i]) + parseInt(num2[j]) + carry;
        } else if (i >= 0) {
            temp = parseInt(num1[i]) + carry;
        } else {
            temp = parseInt(num2[j]) + carry;
        }
        carry = Math.floor(temp / 10);
        res = (temp % 10).toString() + res;
        i--;
        j--;
    }
    if (carry != 0) {
        res = carry.toString() + res;
    }
    return res;
};

console.log(addStrings('123', '456'));