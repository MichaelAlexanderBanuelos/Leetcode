/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // sort the array
    // create a variable to store the greatest amount of repeated number
    // create a var for current amount of repeated element
    // create a var for current element
    // if the current element matches the variable
    // increment
    // if the variable doesnt match
    // change the element and compare value
    // start incrementing from scratch
    
    nums.sort((a, b) => a - b);
    let mid = Math.floor(nums.length / 2);
    return nums[mid]
};