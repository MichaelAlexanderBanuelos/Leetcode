var maxAreaOfIsland = function(grid) {
 let max = 0;
 const dfs = (row, colum) => {
        if (row < 0 || row >= grid.length || colum < 0 || colum >= grid[0].length || grid[row][colum] !== 1) {
            return 0;
        }
        grid[row][colum] = 0;
        return 1 + dfs(row - 1, colum) + dfs(row + 1, colum) + dfs(row, colum - 1) + dfs(row, colum + 1);
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) max = Math.max(max, dfs(i, j))
        }
    }
    return max;
};