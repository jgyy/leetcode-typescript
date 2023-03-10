function maxProfit(k: number, prices: number[]): number {
    const len = prices.length;
    if (k >= len / 2) {
        let maxProfit = 0;
        for (let i = 1; i < len; i++) {
            if (prices[i] > prices[i - 1]) {
                maxProfit += prices[i] - prices[i - 1];
            }
        }
        return maxProfit;
    }
    const buy = new Array(k + 1).fill(-Infinity);
    const sell = new Array(k + 1).fill(0);
    for (let i = 0; i < len; i++) {
        for (let j = 1; j <= k; j++) {
            buy[j] = Math.max(buy[j], sell[j - 1] - prices[i]);
            sell[j] = Math.max(sell[j], buy[j] + prices[i]);
        }
    }
    return sell[k];
};

console.log(maxProfit(2, [2, 4, 1]));