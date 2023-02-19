function canWin(currentState: string): boolean {
    for (let i = 0; i < currentState.length - 1; i++) {
        if (currentState[i] === '+' && currentState[i + 1] === '+') {
            if (!canWin(currentState.substring(0, i) + '--' + currentState.substring(i + 2))) {
                return true;
            }
        }
    }
    return false;
};

console.log(canWin("+++++")); // false
console.log(canWin("++++")); // true
console.log(canWin("++")); // true