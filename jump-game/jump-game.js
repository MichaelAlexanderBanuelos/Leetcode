/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // keep track of farthest distance we can jump
    // we know the farthest distance we can jump is the maximum of the current index plus current idx value
    // if our idx is greater than farthest jump return false
    // if our farthest jump is greater than arr length return true
    // if we loop through whole array return true;
    
    let maxDistance = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDistance = Math.max(maxDistance, i + nums[i]);
        if (maxDistance >= nums.length - 1) return true;
        if (i >= maxDistance) return false;
    }
};