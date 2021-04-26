/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    nums.sort((a, b) => a - b);
    let i = 0;
    let j = i + 1;
    let count = 0;
    
    while (i < nums.length && j < nums.length) {
        if (i === j || nums[j] - nums[i] < k) j++;
        else if (nums[j] - nums[i] > k) i++;
        else {
            i++
            count++
            while (i < nums.length && nums[i] === nums[i - 1]) i++;
        }
    }
    return count;
};