/**
 * Definition for read4()
 * read4 = function(buf4: string[]): number {
 *     ...
 * };
 */

var solution = function (read4: any) {
    const internalBuffer: any = [];

    return function (buf: string[], n: number): number {
        let readBytes = 0;
        while (readBytes < n) {
            if (internalBuffer.length === 0) {
                const size = read4(internalBuffer);
                if (size === 0) {
                    break;
                }
            }
            buf[readBytes++] = internalBuffer.shift();
        }
        return readBytes;
    };
};

const read4 = (buf4: string[]): number => {
    buf4[0] = 'a';
    buf4[1] = 'b';
    buf4[2] = 'c';
    buf4[3] = 'd';
    return 4;
};
const buf = Array(4).fill('');
const n = 4;
console.log(solution(read4)(buf, n));
