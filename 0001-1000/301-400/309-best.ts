function maxProfit(prices: number[]): number {
    let sold = Number.NEGATIVE_INFINITY;
    let held = Number.NEGATIVE_INFINITY;
    let reset = 0;

    for (let price of prices) {
        let pre_sold = sold;
        sold = held + price;
        held = Math.max(held, reset - price);
        reset = Math.max(reset, pre_sold);
    }

    return Math.max(sold, reset);
};

console.log(maxProfit([1, 2, 3, 0, 2]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));