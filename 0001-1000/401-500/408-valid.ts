function validWordAbbreviation(word: string, abbr: string): boolean {
    let i = 0;
    let j = 0;

    while (i < word.length && j < abbr.length) {
        if (word[i] === abbr[j]) {
            i++;
            j++;
            continue;
        }

        if (abbr[j] < "0" || abbr[j] > "9") {
            return false;
        }

        if (abbr[j] === "0") {
            return false;
        }

        let start = j;

        while (j < abbr.length && abbr[j] >= "0" && abbr[j] <= "9") {
            j++;
        }

        const offset = Number(abbr.slice(start, j));
        i += offset;
    }

    return i === word.length && j === abbr.length;
};

console.log(validWordAbbreviation("internationalization", "i12iz4n"));