/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // if we can assume the arrays are sorted we can use two pointers
    // one pointer will reference the greed factor while the other references the cookie size
    // create variable to store satisfied children
    // start both pointers at the beginning of each array
    // if g <= j then increment both and increment satisfaction
    // if g >= j increment j until it reaches the point where it is greater than g 
    g.sort((a,b) => a - b);
    s.sort((a,b) => a - b);
    let satisfaction = 0;
    let greed = 0; 
    let cookie = 0;
    while (greed <= g.length && cookie <= s.length) {
        if (s[cookie] >= g[greed]) {
            satisfaction++
            greed++
            cookie++
        } else {
                    cookie++

        }
    }
        return satisfaction;
};