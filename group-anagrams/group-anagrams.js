/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let anagrams = {};
    let res = [];
    // anagrams are always exactly the same when sorted
    // create an obj where each key the str sorted and the value is an array of strs that equal the key when sorted
    
    for (let i = 0; i < strs.length; i++) {
        let sorted = strs[i].split('').sort().join('');
        if (!anagrams[sorted]) {
            anagrams[sorted] = [strs[i]]
        } else {
            anagrams[sorted].push(strs[i])
        }
    }
    for (let key in anagrams) {
        res.push(anagrams[key])
    };
    return res;
};