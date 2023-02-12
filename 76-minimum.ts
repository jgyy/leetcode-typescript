function minWindow(s: string, t: string): string {
    const need = new Map();
    const window = new Map();
    for (const c of t) {
        need.set(c, (need.get(c) || 0) + 1);
    }
    let left = 0;
    let right = 0;
    let valid = 0;
    let start = 0;
    let len = Number.MAX_SAFE_INTEGER;
    while (right < s.length) {
        const c = s[right];
        right++;
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }
        while (valid === need.size) {
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            const d = s[left];
            left++;
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, (window.get(d) || 0) - 1);
            }
        }
    }
    return len === Number.MAX_SAFE_INTEGER ? "" : s.substring(start, start + len);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));