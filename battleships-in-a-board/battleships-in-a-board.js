/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    // loop through each string
    // for each element
    // check if it is an X
    // if it is an X
    // check the row above it and the item behind it
    // if it is increment
    // row above is i - 1
    // column behind is j - 1
    let ships = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let currentElement = board[i][j];
            if (currentElement === "X") {
                if (i === 0 && j === 0) {
                    ships++
                } else if (i === 0 && board[i][j - 1] !== "X") {
                    ships++
                } else if (i !== 0 && board[i - 1][j] !== "X" && board[i][j - 1] !== "X") {
                    ships++
                }
            }
        }
    }
    return ships;
};