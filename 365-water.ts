function canMeasureWater(jug1Capacity: number, jug2Capacity: number, targetCapacity: number): boolean {
    if (jug1Capacity + jug2Capacity < targetCapacity) {
        return false;
    }
    if (jug1Capacity === targetCapacity || jug2Capacity === targetCapacity || jug1Capacity + jug2Capacity === targetCapacity) {
        return true;
    }

    if (jug1Capacity > jug2Capacity) {
        [jug1Capacity, jug2Capacity] = [jug2Capacity, jug1Capacity];
    }

    while (jug2Capacity % jug1Capacity !== 0) {
        [jug1Capacity, jug2Capacity] = [jug2Capacity % jug1Capacity, jug1Capacity];
    }
    return targetCapacity % jug1Capacity === 0;
};

console.log(canMeasureWater(3, 5, 4));