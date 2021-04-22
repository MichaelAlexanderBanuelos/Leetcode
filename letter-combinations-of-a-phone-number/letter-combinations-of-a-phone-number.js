var letterCombinations = function(digits) {
    // create a map of all the strings for each digit
    // loop through input digits
    // for each digit
    // perform a look up in the map
    // loop through the arr of strings in the map
    // for each string
    // dfs through all possible outcomes
    // remove previous element 
    if (digits.length === 0) {
        return []
    }
    let res = [];
    const map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    }
    const dfs = (path, idx) => {
      if (path.length === digits.length) {
        return res.push(path.join(''));
      }
      let digit = digits[idx];
      let chars = map[digit];
      for (let i = 0; i < chars.length; i++) {
        path.push(chars[i]);
        dfs(path, idx + 1);
        path.pop();
      }
    }
    dfs([], 0)
    return res;
};