/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    // count the frequencies
    // sort the array 
    // use the frequenices to sort
    // if the freq are not the same sort in inc order
    // else sort in dec order
    
    let freq = {};
    for (let i = 0; i < nums.length; i++) {
        freq[nums[i]] = freq[nums[i]] ? freq[nums[i]] +1 : 1;
    }
    return nums.sort((a, b) => {
        if (freq[a] !== freq[b]) {
            return freq[a] - freq[b]
        } else {
            return b - a
        }
    })
};