function isNumber(s: string): boolean {
    let exp = false, sign = false, num = false, dec = false
    for (let c of s)
        if (c >= '0' && c <= '9') num = true
        else if (c === 'e' || c === 'E')
            if (exp || !num) return false
            else exp = true, sign = false, num = false, dec = false
        else if (c === '+' || c === '-')
            if (sign || num || dec) return false
            else sign = true
        else if (c === '.')
            if (dec || exp) return false
            else dec = true
        else return false
    return num
};

console.log(isNumber("0"));
console.log(isNumber(".1"));
console.log(isNumber("Infinity"));
console.log(isNumber("G76"));
console.log(isNumber("2e0"));