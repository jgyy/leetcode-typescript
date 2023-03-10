/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
class Trie {
    trie: { [key: string]: any };
    constructor() {
        this.trie = {};
    }

    insert(word: string): void {
        let node = this.trie;
        for (let i = 0; i < word.length; i++) {
            if (!node[word[i]]) {
                node[word[i]] = {};
            }
            node = node[word[i]];
        }
        node.isEnd = true;
    }

    search(word: string): boolean {
        let node = this.trie;
        for (let i = 0; i < word.length; i++) {
            if (!node[word[i]]) {
                return false;
            }
            node = node[word[i]];
        }
        return !!node.isEnd;
    }

    startsWith(prefix: string): boolean {
        let node = this.trie;
        for (let i = 0; i < prefix.length; i++) {
            if (!node[prefix[i]]) {
                return false;
            }
            node = node[prefix[i]];
        }
        return true;
    }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // return True
console.log(trie.search("app"));     // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app"));     // return True
