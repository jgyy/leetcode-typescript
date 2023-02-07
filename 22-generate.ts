function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    const dfs = (left: number, right: number, str: string) => {
      if (left === n && right === n) {
        result.push(str);
        return;
      }
      if (left < n) {
        dfs(left + 1, right, str + "(");
      }
      if (left > right) {
        dfs(left, right + 1, str + ")");
      }
    };
    dfs(0, 0, "");
    return result;
};

console.log(generateParenthesis(3));