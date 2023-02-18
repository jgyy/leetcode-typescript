/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */
class ValidWordAbbr {
    dict: string[];
    hash: { [key: string]: string[] };

    constructor(dictionary: string[]) {
        this.dict = dictionary;
        let hash: { [key: string]: string[] } = {};

        dictionary.forEach(function (d) {
            var len = d.length;
            var abbr = d;

            if (len > 2) {
                abbr = d.charAt(0) + (len - 2) + d.charAt(len - 1);
            }

            if (hash[abbr]) {
                if (!~hash[abbr].indexOf(d)) {
                    hash[abbr].push(d);
                }
            } else {
                hash[abbr] = [d];
            }
        });

        this.hash = hash;
    }

    isUnique(word: string): boolean {
        var len = word.length;
        var abbr = word;

        if (len > 2) {
            abbr = word.charAt(0) + (len - 2) + word.charAt(len - 1);
        }

        if (this.hash[abbr]) {
            return this.hash[abbr].length === 1 && this.hash[abbr][0] === word;
        }

        return true;
    }
}

const validWordAbbr = new ValidWordAbbr(["deer", "door", "cake", "card"]);
console.log(validWordAbbr.isUnique("dear")); // false
console.log(validWordAbbr.isUnique("cart")); // true
console.log(validWordAbbr.isUnique("cane")); // false
console.log(validWordAbbr.isUnique("make")); // true
