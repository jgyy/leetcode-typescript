function longestPalindrome(s: string): string {
    if (s.length < 2) return s;
    let start = 0;
    let maxLength = 1;
    function expandAroundCenter(left: number, right: number): void {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentPalindromeLength = right - left + 1;
            if (currentPalindromeLength > maxLength) {
                maxLength = currentPalindromeLength;
                start = left;
            }
            left--;
            right++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i - 1, i + 1);
        expandAroundCenter(i, i + 1);
    }
    return s.substring(start, start + maxLength);
};

console.log(longestPalindrome('babad')); // bab
console.log(longestPalindrome('cbbd')); // bb