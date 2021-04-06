/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    // we can use a sliding window to solve this
    // create a variable i which will represent the current index or the start of the window
    // create a variable j which represents the end of the window and starts at i + 1
    // loop through the array comparing i to j
    // if i is less than j
    // increment j
    // if i greater than j
    // increment i and reset j to i + 1
    // whenever i is greater than j
    // subtract the indexes and push that to the result array
    
    let result = [];
    
    let i = 0; 
    let j = i + 1;
    
    while (i < T.length) {
        let today = T[i];
        let nextDay = T[j];
        if (today < nextDay) {
            result.push(j - i);
            i++;
            j = i + 1;
        } else {
            j++
        }
        if (j > T.length) {
            result.push(0);
            i++;
            j = i + 1;
        }
    }
    
    return result;
    
};