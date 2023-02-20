function rearrangeString(s: string, k: number): string {
    if (k == 0) return s;
    const map = new Map();
    for (const c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }
    const queue = [];
    for (const [c, count] of map) {
        queue.push({ c, count });
    }
    queue.sort((a, b) => b.count - a.count);
    const result = [];
    while (queue.length > 0) {
        const temp = [];
        let i = 0;
        while (i < k) {
            if (queue.length == 0) {
                if (temp.length > 0) return "";
                break;
            }
            let shifted: { c: string, count: number } = queue.shift()!;
            let c = shifted.c;
            let count = shifted.count;
            result.push(c);
            if (count > 1) {
                temp.push({ c, count: count - 1 });
            }
            i++;
        }
        for (const { c, count } of temp) {
            queue.push({ c, count });
        }
        queue.sort((a, b) => b.count - a.count);
    }
    return result.join("");
};

console.log(rearrangeString("aabbcc", 3));