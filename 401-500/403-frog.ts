function canCross(stones: number[]): boolean {
    const graph: Map<number, Set<number>> = new Map();

    for (let i = 0; i < stones.length; i++) {
        graph.set(stones[i], new Set());
    }

    graph.get(stones[0])!.add(1);

    for (let i = 0; i < stones.length; i++) {
        const stone = stones[i];
        for (const jump of graph.get(stone)!) {
            const reach = stone + jump;
            if (reach === stones[stones.length - 1]) {
                return true;
            }

            const nextStones = graph.get(reach);
            if (nextStones) {
                nextStones.add(jump);
                if (jump - 1 > 0) {
                    nextStones.add(jump - 1);
                }
                nextStones.add(jump + 1);
            }
        }
    }

    return false;
};

console.log(canCross([0, 1, 3, 5, 6, 8, 12, 17]));