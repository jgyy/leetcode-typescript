function reconstructQueue(people: number[][]): number[][] {
    people.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return b[0] - a[0];
    });
    const result: number[][] = [];
    people.forEach(person => {
        result.splice(person[1], 0, person);
    });
    return result;
};

console.log(reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]));