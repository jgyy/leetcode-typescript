function generatePalindromes(s: string): string[] {
    function backtrack(half: string[], perms: { [k: string]: string }, mid: string, n = 0): void {
        if (n === half.length - 1) {
            let left = half.join('');
            if (!perms[left]) {
                perms[left] = left + mid + reverse(left);
            }
            return;
        }
        for (let i = n; i < half.length; i++) {
            swap(half, i, n);
            backtrack(half, perms, mid, n + 1);
            swap(half, i, n);
        }
    }

    function swap(half: string[], i: number, j: number): void {
        let temp = half[i];
        half[i] = half[j];
        half[j] = temp;
    }

    function reverse(str: string): string {
        let rev = '';
        for (let i = str.length - 1; i >= 0; i--) {
            rev += str[i];
        }
        return rev;
    }

    if (s.length < 2) return s.split('');
    const counts: { [k: string]: number } = {};
    for (let c of s) {
        counts[c] = (counts[c] || 0) + 1;
    }
    if (s.length === counts[s[0]]) return [s];
    let mid = '';
    for (let key in counts) {
        if (counts[key] % 2) {
            if (mid) return [];
            mid = key;
            if (--counts[key] === 0) delete counts[key];
        }
    }
    const half: string[] = [];
    for (let key in counts) {
        Array.prototype.push.apply(half, new Array(counts[key] / 2).fill(key));
    }
    const perms = {};
    backtrack(half, perms, mid);
    return Object.values(perms);
};

console.log(generatePalindromes('aabb'));
console.log(generatePalindromes('a'));
console.log(generatePalindromes('aab'));