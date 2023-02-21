/**
 * The knows API is defined in the parent class Relation.
 * knows(a: number, b: number): boolean {
 *     ...
 * };
 */

const solution277 = function(knows: any) {

    return function(n: number): number {
        let candidate = 0;
        for (let i = 1; i < n; i++) {
            if (knows(candidate, i)) {
                candidate = i;
            }
        }
        for (let i = 0; i < n; i++) {
            if (i !== candidate && (knows(candidate, i) || !knows(i, candidate))) {
                return -1;
            }
        }
        return candidate;
    };
};

const knows = (a: number, b: number): boolean => {
    if (a === 0 && b === 1) return true;
    if (a === 0 && b === 2) return false;
    if (a === 1 && b === 0) return false;
    if (a === 1 && b === 2) return false;
    if (a === 2 && b === 0) return true;
    if (a === 2 && b === 1) return true;
    return false;
}

console.log(solution277(knows)(3)); // 0