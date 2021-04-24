/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // we know that the current sum minus any index is the sum of that subarray
    // we can keep track of the current sum and add it to a map
    // if the current sum - k exists in our map, then that subarray sum adds up to k
    // every time we compute a sum, check if it exists in map, 
    // if it doesnt then add that sum to map or increment the amount by 1
    
    let prevSum = {0: 1};
    let sum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (prevSum[sum - k]) {
            count += prevSum[sum - k];
        }
        if (prevSum[sum]) {
            prevSum[sum] += 1;
        } else {
            prevSum[sum] = 1;
        }
    }
    return count;
};