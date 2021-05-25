/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let shuffled = [];
    let nums1 = nums.slice(0, n);
    let nums2 = nums.slice(n);
    
    while (nums1.length || nums2.length) {
        let num1 = nums1.shift();
        let num2 = nums2.shift();
        shuffled.push(num1);
        shuffled.push(num2);
    }
    return shuffled;
};