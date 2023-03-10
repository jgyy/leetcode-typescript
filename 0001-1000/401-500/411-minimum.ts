function minAbbreviation(target: string, dictionary: string[]): string {
    const validWordAbbreviation = function (word: string, abbr: string): boolean {
        let j = 0;
        for (let i = 0; i < abbr.length; i++) {
            if (abbr[i] >= '0' && abbr[i] <= '9') {
                if (abbr[i] == '0') {
                    return false;
                }
                let temp = i;
                while (abbr[temp] >= '0' && abbr[temp] <= '9') {
                    temp++;
                }
                j += parseInt(abbr.substring(i, temp));
                i = temp - 1;
                continue;
            }

            if (abbr[i] != word[j]) {
                return false;
            }
            j++;
        }
        return j == word.length;
    };

    let res = ''
    let min_count = Number.MAX_SAFE_INTEGER;

    const _backtrack = function (c_string: string, start: number, count: number): void {
        if (start == target.length) {
            if (count != 0) {
                c_string += count;
            }

            let abbr_letter_count = 0;
            for (let i = 0; i < c_string.length; i++) {
                if (c_string[i] >= '0' && c_string[i] <= '9') {
                    let temp = i;
                    while (c_string[temp] >= '0' && c_string[temp] <= '9') {
                        temp++;
                    }
                    i = temp - 1;
                }
                abbr_letter_count++;
            }

            if (res.length && abbr_letter_count >= min_count) {
                return;
            } else {
                for (let word of dictionary) {
                    if (validWordAbbreviation(word, c_string)) {
                        return;
                    }
                }
                res = c_string;
                min_count = abbr_letter_count;
            }
            return;
        }

        _backtrack(c_string, start + 1, count + 1);
        _backtrack(c_string + (count != 0 ? count : '') + target[start], start + 1, 0);
    }

    _backtrack('', 0, 0);
    return res;
};

console.log(minAbbreviation("apple", ["blade"]));