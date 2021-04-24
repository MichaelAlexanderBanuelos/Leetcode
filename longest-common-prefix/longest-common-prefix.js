/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    if (strs.length === 0) return prefix;
    let comparisonWord = strs[0];
    let comparisonIndex = 0;
    
    for (let char of comparisonWord) {
        for (let i = 1; i < strs.length; i++) {
            let currentWord = strs[i];
            let currentLetter = currentWord.charAt(comparisonIndex);
            if (char !== currentLetter || comparisonIndex > currentWord.length) {
                return prefix;
            }
        }
        comparisonIndex++;
        prefix += char;
    }
    return prefix;
};
