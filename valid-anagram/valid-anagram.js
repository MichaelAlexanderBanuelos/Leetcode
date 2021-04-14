/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // if the lengths dont match they arent anagrams
    // we can use an object to store the letters and amount of times they appear
    // iterate through the object and for each key, look up the value in the other object and verify that they are equal
    if (s.length !== t.length) {
        return false;
    }
    let dict1 = {};
    let dict2 = {};
    for (let i = 0; i < s.length; i++) {
        if (!dict1[s[i]]) {
            dict1[s[i]] = 1;
        } else {
            dict1[s[i]] += 1;
        }
    }
       for (let i = 0; i < t.length; i++) {
        if (!dict2[t[i]]) {
            dict2[t[i]] = 1;
        } else {
            dict2[t[i]] += 1;
        }
    }
    for (let key in dict1) {
        if (dict1[key] !== dict2[key]) {
            return false;
        }
    }
    return true;
};