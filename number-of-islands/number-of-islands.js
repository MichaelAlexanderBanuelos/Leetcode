var numIslands = function(grid) {
    let counter = 0;
    const dfs = (row, col) => {
      grid[row][col] = "0"
      let rowLen = grid.length;
      let colLen = grid[row].length;
      if (row - 1 >= 0 && grid[row-1][col] == '1') dfs(row - 1, col);
      if (row + 1 < rowLen && grid[row+1][col] == '1') dfs(row + 1, col);
      if (col - 1 >= 0 && grid[row][col-1] == '1') dfs(row, col - 1);
      if (col + 1 < colLen && grid[row][col+1] == '1') dfs(row, col + 1);
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                counter++;
                dfs(i, j)
            }
        }
    }
    return counter;
};