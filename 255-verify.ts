function verifyPreorder(preorder: number[]): boolean {
    const stack: number[] = [];
    let low = -Infinity;
    for (let i = 0; i < preorder.length; i++) {
        if (preorder[i] < low) {
            return false;
        }
        while (stack.length > 0 && preorder[i] > stack[stack.length - 1]) {
            low = stack.pop()!;
        }
        stack.push(preorder[i]);
    }
    return true;
};

console.log(verifyPreorder([5, 2, 1, 3, 6]));