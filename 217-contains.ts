function containsDuplicate(nums: number[]): boolean {
    let set = new Set();
    for (let num of nums) {
        if (set.has(num)) {
            return true;
        } else {
            set.add(num);
        }
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));