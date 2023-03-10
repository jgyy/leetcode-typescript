function getSkyline(buildings: number[][]): number[][] {
    let position = Array.from(
        new Set(buildings.flatMap(building => building.slice(0, 2)))
    ).sort((a, b) => a - b);

    let edgeIndexMap = new Map<number, number>();
    for (let i = 0; i < position.length; i++) {
        edgeIndexMap.set(position[i], i);
    }

    let heights = new Array(position.length).fill(0);

    for (let [left, right, height] of buildings) {
        let leftIndex = edgeIndexMap.get(left)!;
        let rightIndex = edgeIndexMap.get(right)!;

        for (let i = leftIndex; i < rightIndex; i++) {
            heights[i] = Math.max(heights[i], height);
        }
    }

    let answer = [];

    for (let i = 0; i < heights.length; i++) {
        if (!answer.length || answer[answer.length - 1][1] !== heights[i]) {
            answer.push([position[i], heights[i]]);
        }
    }
    return answer;
};

console.log(getSkyline([[0, 2, 3], [2, 5, 3]]));
console.log(getSkyline([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]));