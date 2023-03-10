function alienOrder(words: string[]): string {
    const graph: Map<string, Set<string>> = new Map();
    const indegree: Map<string, number> = new Map();

    for (const word of words) {
        for (const c of word) {
            graph.set(c, new Set());
            indegree.set(c, 0);
        }
    }

    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];
        if (word1.length > word2.length && word1.startsWith(word2)) {
            return "";
        }
        for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
            const c1 = word1[j];
            const c2 = word2[j];
            if (c1 !== c2) {
                if (!graph.get(c1)!.has(c2)) {
                    graph.get(c1)!.add(c2);
                    indegree.set(c2, indegree.get(c2)! + 1);
                }
                break;
            }
        }
    }

    const queue: string[] = [];
    for (const [char, count] of indegree) {
        if (count === 0) {
            queue.push(char);
        }
    }

    const result: string[] = [];
    while (queue.length) {
        const char = queue.shift()!;
        result.push(char);
        for (const nextChar of graph.get(char)!) {
            indegree.set(nextChar, indegree.get(nextChar)! - 1);
            if (indegree.get(nextChar) === 0) {
                queue.push(nextChar);
            }
        }
    }

    return result.length === indegree.size ? result.join("") : "";
};

console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"])); // "wertf"