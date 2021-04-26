/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];    
    const dfs = (path, open, close) => {
        if (path.length === n * 2) {
            return result.push(path.slice().join(''));
        }
        if (open < n) {
            path.push('(');
            dfs(path, open + 1, close);
            path.pop();
        }
        if (close < open) {
            path.push(')');
            dfs(path, open, close + 1);
            path.pop();
        }
    }
    dfs([], 0, 0)
    return result;
};