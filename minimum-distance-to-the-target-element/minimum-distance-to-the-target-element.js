/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    // loop through nums
    // current element is equal to target
    // find the abs value of i - start
    // repeat for each target found only reassign for min
    
    let minDist = 1001;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            minDist = Math.min(minDist, Math.abs(i - start));
        }
    }
    return minDist;
};