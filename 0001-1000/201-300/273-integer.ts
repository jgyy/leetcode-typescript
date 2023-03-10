function numberToWords(num: number): string {
    if (num === 0) {
        return "Zero";
    }
    const ones: string[] = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const tens: string[] = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const teens: string[] = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const thousands: string[] = ["", "Thousand", "Million", "Billion"];

    function helper(num: number): string {
        if (num === 0) {
            return "";
        } else if (num < 10) {
            return ones[num] + " ";
        } else if (num < 20) {
            return teens[num - 10] + " ";
        } else if (num < 100) {
            return tens[Math.floor(num / 10)] + " " + helper(num % 10);
        } else {
            return ones[Math.floor(num / 100)] + " Hundred " + helper(num % 100);
        }
    }

    let result = "";
    let i = 0;
    while (num > 0) {
        if (num % 1000 !== 0) {
            result = helper(num % 1000) + thousands[i] + " " + result;
        }
        num = Math.floor(num / 1000);
        i++;
    }
    return result.trim();
};

console.log(numberToWords(123)); // "One Hundred Twenty Three"
console.log(numberToWords(12345)); // "Twelve Thousand Three Hundred Forty Five"
console.log(numberToWords(1234567)); // "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"