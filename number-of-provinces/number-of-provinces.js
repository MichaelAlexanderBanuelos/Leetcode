/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let provinces = 0;
    const dfs = (row, col, city) => {
        if (isConnected[row][col] === 0) return;
        isConnected[row][col] = 0;
        for (let i = 0; i < city.length; i++) {
            if (isConnected[col][i] === 1) {
                dfs(col, i, isConnected[i])
            }
        }
    }
    
    for (let i = 0; i < isConnected.length; i++) {
        for (let j = 0; j < isConnected[i].length; j++) {
            if (isConnected[i][j] === 1) {
                provinces++;
                dfs(i, j, isConnected[j])
            }
        }
    }
    return provinces;
};