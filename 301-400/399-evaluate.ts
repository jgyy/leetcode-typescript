function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const graph: Map<string, [string, number][]> = new Map();
    const result: number[] = [];

    for (let i = 0; i < equations.length; i++) {
        const [numerator, denominator] = equations[i];
        const value = values[i];

        if (!graph.has(numerator)) {
            graph.set(numerator, []);
        }
        graph.get(numerator)!.push([denominator, value]);

        if (!graph.has(denominator)) {
            graph.set(denominator, []);
        }
        graph.get(denominator)!.push([numerator, 1 / value]);
    }

    for (let i = 0; i < queries.length; i++) {
        const [numerator, denominator] = queries[i];

        if (!graph.has(numerator) || !graph.has(denominator)) {
            result.push(-1);
            continue;
        }

        const visited = new Set<string>();
        const queue: [string, number][] = [[numerator, 1]];

        while (queue.length > 0) {
            const [node, value] = queue.shift()!;
            if (node === denominator) {
                result.push(value);
                break;
            }

            visited.add(node);
            for (const [neighbor, weight] of graph.get(node)!) {
                if (visited.has(neighbor)) {
                    continue;
                }
                queue.push([neighbor, value * weight]);
            }
        }

        if (result.length === i) {
            result.push(-1);
        }
    }

    return result;
};

console.log(calcEquation(
    [["a", "b"], ["b", "c"]],
    [2.0, 3.0],
    [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]
));