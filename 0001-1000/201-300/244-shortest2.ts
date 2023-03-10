/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */
class WordDistance {
    locations: Map<string, number[]>;

    constructor(wordsDict: string[]) {
        this.locations = new Map();
        for (let i = 0; i < wordsDict.length; i++) {
            const word = wordsDict[i];
            if (!this.locations.has(word)) {
                this.locations.set(word, []);
            }
            this.locations.get(word)!.push(i);
        }
    }

    shortest(word1: string, word2: string): number {
        const list1 = this.locations.get(word1)!;
        const list2 = this.locations.get(word2)!;
        let i = 0;
        let j = 0;
        let result = Number.MAX_SAFE_INTEGER;
        while (i < list1.length && j < list2.length) {
            result = Math.min(result, Math.abs(list1[i] - list2[j]));
            if (list1[i] < list2[j]) {
                i++;
            } else {
                j++;
            }
        }
        return result;
    }
}

const wordDistance = new WordDistance(["practice", "makes", "perfect", "coding", "makes"]);
console.log(wordDistance.shortest("coding", "practice"));