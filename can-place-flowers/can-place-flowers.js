/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (flowerbed.length === 1 && flowerbed[0] === 0 || n === 0) {
        return true;
    }
    // loop through the array
    // if the current element is a 0
    // we need to check if the previous element is a 0 and the next element is a 0
    // if these cases are true, decrement n and set current element to a 1
    // if at the end of the loop n is 0, return true else return false
    for (let i = 0; i < flowerbed.length; i++) {
        let currentElement = flowerbed[i];
        if (currentElement === 0) {
            if (i === 0 && flowerbed[i + 1] === 0) {
                n--;
                flowerbed[i] = 1
            } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
                n--;
                flowerbed[i] = 1
            } else if (i === flowerbed.length - 1 && flowerbed[i - 1] === 0) {
                n--
                flowerbed[i] = 1
            }
        }
        if (n === 0) {
            return true;
        }
    }
    if (n === 0) {
        return true;
    } else {
        return false;
    }
};