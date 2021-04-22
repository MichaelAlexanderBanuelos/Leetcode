/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(input) {
    let start = 0;
    let end = input.length - 1;
    let containerVolume = 0;
    while (start <= end) {
        let length = end - start;
        let height = Math.min(input[start], input[end]);
        containerVolume = Math.max(containerVolume, length * height);
        if (input[start] <= input[end]) {
            start++
        } else {
            end--
        }
    }
    return containerVolume;
};