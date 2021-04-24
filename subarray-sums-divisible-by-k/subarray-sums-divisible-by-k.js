/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    let map = {0: 1};
    let sum = 0;
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        sum +=  A[i];
      const remainder = ((sum % K) + K) % K; 
        if (map[remainder]) {
            count += map[remainder]
        }
        if (map[remainder]) {
            map[remainder]++
        } else {
            map[remainder] = 1;
        }
    }
    return count;
};