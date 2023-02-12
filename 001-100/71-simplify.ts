function simplifyPath(path: string): string {
    const stack: string[] = [];
    const paths = path.split("/");
    for (const p of paths) {
        if (p === "..") {
            stack.pop();
        } else if (p !== "." && p !== "") {
            stack.push(p);
        }
    }
    return "/" + stack.join("/");
};

console.log(simplifyPath("/home/"));