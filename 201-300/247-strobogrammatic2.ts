function findStrobogrammatic(n: number): string[] {
    const reversiblePairs = [
        ['0', '0'], ['1', '1'],
        ['6', '9'], ['8', '8'], ['9', '6']
    ];

    const generateStroboNumbers = (n: number, finalLength: number): string[] => {
        if (n === 0) {
            return [''];
        }

        if (n === 1) {
            return ['0', '1', '8'];
        }

        const stroboNumbers = generateStroboNumbers(n - 2, finalLength);

        return stroboNumbers.reduce((newStroboNumbers: string[], stroboNumber: string) => {
            reversiblePairs.forEach(([head, tail]) => {
                if (n !== finalLength || head !== '0') {
                    newStroboNumbers.push(head + stroboNumber + tail);
                }
            });

            return newStroboNumbers;
        }, []);
    }

    return generateStroboNumbers(n, n);
};

console.log(findStrobogrammatic(1));
console.log(findStrobogrammatic(2));
console.log(findStrobogrammatic(3));
console.log(findStrobogrammatic(4));
