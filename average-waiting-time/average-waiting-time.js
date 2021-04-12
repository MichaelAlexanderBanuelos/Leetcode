/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    // create a an array to store average wait times
    // create a variable for the start time
    // loop through the array
    // for each element
    // calculate the end time
    // push wait time to the array
    
    let waitTimes = [];
    let start = customers[0][0];
    let end;
    let wait;
    for (let i = 0; i < customers.length; i++) {
        start = Math.max(customers[i][0], start);
        end = start + customers[i][1];
        waitTimes.push(end - customers[i][0]);
        start = end;
    }
    let totalSum = 0;
    for (let i = 0; i < waitTimes.length; i++) {
        totalSum += waitTimes[i]
    }
    return totalSum / waitTimes.length;
};