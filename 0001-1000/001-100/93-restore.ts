function restoreIpAddresses(s: string): string[] {
    const res: string[] = [];
    const dfs = (start: number, path: string[], count: number) => {
        if (count === 4) {
            if (start === s.length) {
                res.push(path.join("."));
            }
            return;
        }
        for (let i = start; i < start + 3; i++) {
            if (i >= s.length) {
                break;
            }
            if (i > start && s[start] === "0") {
                break;
            }
            const str = s.slice(start, i + 1);
            if (Number(str) > 255) {
                break;
            }
            path.push(str);
            dfs(i + 1, path, count + 1);
            path.pop();
        }
    };
    dfs(0, [], 0);
    return res;
};

console.log(restoreIpAddresses("25525511135"));