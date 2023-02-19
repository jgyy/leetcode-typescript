function getHint(secret: string, guess: string): string {
    const map = new Map();
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
        } else {
            map.set(secret[i], (map.get(secret[i]) || 0) + 1);
        }
    }
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] !== secret[i] && map.get(guess[i]) > 0) {
            cows++;
            map.set(guess[i], map.get(guess[i]) - 1);
        }
    }
    return `${bulls}A${cows}B`;
};

console.log(getHint('1807', '7810')); // 1A3B