/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const solution278 = function (isBadVersion: any) {

    return function (n: number): number {
        let left = 1;
        let right = n;
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
};

const isBadVersion = (version: number): boolean => {
    if (version >= 4) return true;
    return false;
}

console.log(solution278(isBadVersion)(5)); // 4