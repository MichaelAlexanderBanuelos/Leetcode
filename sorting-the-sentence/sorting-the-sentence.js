/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    // split the input by space
    // sort the new array by the last index of each word (the number)
    // for each word in the array 
    // split by letter
    // pop off last element (the number)
    // join by letter
    // return the array joined by space
    
    s = s.split(' ');
    s = s.sort((a, b) => a[a.length -1] - b[b.length -1]);
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].split('')
        s[i].pop();
        s[i] = s[i].join('')
    }
    return s.join(' ')
};