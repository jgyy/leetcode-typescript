function getPermutation(n: number, k: number): string {
    const nums: number[] = [];
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        nums.push(i);
        fact *= i;
    }
    k--;
    let res = '';
    for (let i = 0; i < n; i++) {
        fact /= n - i;
        const index = Math.floor(k / fact);
        res += nums[index];
        nums.splice(index, 1);
        k -= index * fact;
    }
    return res;
};

console.log(getPermutation(3, 3));