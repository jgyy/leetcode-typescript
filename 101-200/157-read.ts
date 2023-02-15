/**
 * Definition for read4()
 * read4 = function(buf4: string[]): number {
 *     ...
 * };
 */

var solution = function (read4: any) {

    return function (buf: string[], n: number): number {
        let readBytes = 0;
        const buf4 = Array(4).fill('');
        while (readBytes < n) {
            const size = read4(buf4);
            if (size === 0) {
                break;
            }
            for (let i = 0; i < size && readBytes < n; i++) {
                buf[readBytes++] = buf4[i];
            }
        }
        return readBytes;
    };
};

const read157 = (buf4: string[]): number => {
    buf4[0] = 'a';
    buf4[1] = 'b';
    buf4[2] = 'c';
    buf4[3] = 'd';
    return 4;
};
const buf157 = Array(4).fill('');
const n157 = 4;
console.log(solution(read157)(buf157, n157));
