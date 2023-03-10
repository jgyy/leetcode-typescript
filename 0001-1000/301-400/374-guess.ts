/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 */
var guess = function (num: number): number {
    const picked = 6;
    if (num > picked) {
        return -1;
    } else if (num < picked) {
        return 1;
    } else {
        return 0;
    }
}

function guessNumber(n: number): number {
    let left = 1;
    let right = n;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const result = guess(mid);
        if (result === 0) {
            return mid;
        } else if (result === -1) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};

console.log(guessNumber(10));