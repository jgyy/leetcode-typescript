function minMeetingRooms(intervals: number[][]): number {
    const starts: number[] = [];
    const ends: number[] = [];
    for (let i = 0; i < intervals.length; i++) {
        starts.push(intervals[i][0]);
        ends.push(intervals[i][1]);
    }
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);
    let rooms = 0;
    let end = 0;
    for (let i = 0; i < starts.length; i++) {
        if (starts[i] < ends[end]) {
            rooms++;
        } else {
            end++;
        }
    }
    return rooms;
};

console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]]));