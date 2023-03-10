function maxSumSubmatrix(matrix: number[][], k: number): number {
    let maxSum = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < matrix.length; i++) {
        const sums = new Array(matrix[0].length).fill(0);

        for (let j = i; j < matrix.length; j++) {
            for (let c = 0; c < matrix[0].length; c++) {
                sums[c] += matrix[j][c];
            }

            const sumSet = new Set<number>();
            sumSet.add(0);
            let sum = 0;
            let max = Number.NEGATIVE_INFINITY;

            for (let s of sums) {
                sum += s;
                const target = sum - k;

                let ceiling = Number.POSITIVE_INFINITY;
                for (let item of sumSet) {
                    if (item >= target && item < ceiling) {
                        ceiling = item;
                    }
                }

                if (ceiling !== Number.POSITIVE_INFINITY) {
                    max = Math.max(max, sum - ceiling);
                }

                sumSet.add(sum);
            }

            maxSum = Math.max(maxSum, max);
        }
    }

    return maxSum;
};

console.log(maxSumSubmatrix([[1, 0, 1], [0, -2, 3]], 2));