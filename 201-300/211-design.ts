/**
 * Your WordDictionary wordDictionaryect will be instantiated and called as such:
 * var wordDictionary = new WordDictionary()
 * wordDictionary.addWord(word)
 * var param_2 = wordDictionary.search(word)
 */
class WordDictionary {
    d: Map<number, Set<string>>;

    constructor() {
        this.d = new Map();
    }

    addWord(word: string): void {
        const len = word.length;
        if (this.d.has(len)) {
            this.d.get(len)!.add(word);
        } else {
            this.d.set(len, new Set([word]));
        }
    }

    search(word: string): boolean {
        const len = word.length;
        if (!this.d.has(len)) {
            return false;
        }
        const set = this.d.get(len)!;
        if (set.has(word)) {
            return true;
        }
        for (const s of set) {
            let flag = true;
            for (let i = 0; i < len; i++) {
                if (word[i] !== '.' && word[i] !== s[i]) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                return true;
            }
        }
        return false;
    }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord('bad');
wordDictionary.addWord('dad');
wordDictionary.addWord('mad');
console.log(wordDictionary.search('pad'));
console.log(wordDictionary.search('bad'));
console.log(wordDictionary.search('.ad'));
console.log(wordDictionary.search('b..'));
