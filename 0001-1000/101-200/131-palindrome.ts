function partition(s: string): string[][] {
    const result: string[][] = [];

    const isPalindrome = (s: string) => {
        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            if (s[i] !== s[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    };

    const backtrack = (s: string, track: string[]) => {
        if (s.length === 0) {
            result.push(track.slice());
            return;
        }

        for (let i = 0; i < s.length; i++) {
            const sub = s.substring(0, i + 1);
            if (isPalindrome(sub)) {
                track.push(sub);
                backtrack(s.substring(i + 1), track);
                track.pop();
            }
        }
    };

    backtrack(s, []);
    return result;
};

console.log(partition('aab'));