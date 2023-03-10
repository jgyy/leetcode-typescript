function isStrobogrammatic(num: string): boolean {
    const map: Map<string, string> = new Map();
    map.set('0', '0');
    map.set('1', '1');
    map.set('6', '9');
    map.set('8', '8');
    map.set('9', '6');
    let left = 0;
    let right = num.length - 1;
    while (left <= right) {
        const leftChar = num[left];
        const rightChar = num[right];
        if (!map.has(leftChar) || !map.has(rightChar) || map.get(leftChar) !== rightChar) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

console.log(isStrobogrammatic('69'));