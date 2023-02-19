function generatePossibleNextMoves(currentState: string): string[] {
    const result = [];
    for (let i = 0; i < currentState.length - 1; i++) {
        if (currentState[i] === '+' && currentState[i + 1] === '+') {
            result.push(currentState.substring(0, i) + '--' + currentState.substring(i + 2));
        }
    }
    return result;
};

console.log(generatePossibleNextMoves("++++")); // ["--++","+--+","++--"]