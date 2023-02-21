function lastRemaining(n: number): number {
    let left = true;
    let remaining = n;
    let step = 1;
    let head = 1;
    while (remaining > 1) {
        if (left || remaining % 2 === 1) {
            head += step;
        }
        remaining = Math.floor(remaining / 2);
        step *= 2;
        left = !left;
    }
    return head;
};

console.log(lastRemaining(9));