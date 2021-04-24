/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    // we can use two variables to store the movements
    // if the robot moves up or down we'll increment that variable accordingly
    // if it moves left or right we'll increment a separate variable accordingly
    // if both variables are zero at the end then return true else return false;
    
    let north = 0;
    let west = 0;
    for (let i = 0; i < moves.length; i++) {
        let move = moves[i];
        if (move === 'U') north++
        if (move === 'D') north--
        if (move === 'L') west++
        if (move === 'R') west--
    }
    if (north === 0 && west === 0) return true;
    return false;
};