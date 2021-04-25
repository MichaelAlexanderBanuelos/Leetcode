/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // we need 4 loops. one for each of the sides
    // we can set boundaries and once we reach the end of the loop decrement the boundaries
    
    let n = matrix.length - 1;
    let m = matrix[0].length - 1;
    let colStart = 0;
    let rowStart = 0;
    let res = [];
    
    while (true) {
        // loop from left to right
        for (let i = colStart; i <= m; i++) {
            res.push(matrix[rowStart][i])        
        }
        rowStart++
        if (rowStart > n) {
          return res
        }
        // loop from top to bottom 
        for (let i = rowStart; i <= n; i++) {
            res.push(matrix[i][m])
        }
        m--
        if (m < colStart) {
          return res;
        }
        // loop from right to left
        for (let i = m; i >= colStart; i--) {
          res.push(matrix[n][i])
        }
        n--
        if (n < rowStart) {
          return res;
        }
           // loop from bottom to top 
        for (let i = n; i >= rowStart; i--) {
            res.push(matrix[i][colStart])
        }
        colStart++
        if (colStart > m) {
          return res
        }
    }
    return res;
};
