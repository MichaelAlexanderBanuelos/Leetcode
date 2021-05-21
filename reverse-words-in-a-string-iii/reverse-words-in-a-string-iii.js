/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // split input by space
    // iterate through array of words
    // for each word, split by letter, reverse and then join
    // return the new array joined by space
    s = s.split(' ');
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].split('').reverse().join('');
    };
    return s.join(' ')
};