function intToRoman(num: number): string {
    const romanNumber: { [key: number]: string } = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    };
    const romanKeys = Object.keys(romanNumber).reverse();
    const romanValues = Object.values(romanNumber).reverse();
    let roman = '';
    let i = 0;
    while (num > 0) {
        if (num >= Number(romanKeys[i])) {
            roman += romanValues[i];
            num -= Number(romanKeys[i]);
        } else {
            i++;
        }
    }
    return roman;
};

console.log(intToRoman(1994));