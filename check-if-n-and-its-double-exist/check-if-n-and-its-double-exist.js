/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    // create object to store values we've seen
    // loop through the array
    // for each element
    // check if the that element * 2 or / 2 exists in the object
    // return true if it does
    // if it doesnt, then add that to object
    // if it n3ver hits that conditional, then just return false
    
    
    let seen = {}
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (seen[element * 2] || seen[element / 2]) {
            return true;
        } else {
            seen[element] = true;
        }
    }
    return false;
};