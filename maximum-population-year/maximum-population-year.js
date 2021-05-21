
var maximumPopulation = function(logs) {
    let populations = {};
    let minYear = 99999;
    let amountOfPeopleAlive = 0;
    for (let i = 0; i < logs.length; i++) {
        let birth = logs[i][0];
        let death = logs[i][1];
        while (birth < death) {
            if (!populations[birth]) {
                populations[birth] = 1;
            } else {
                populations[birth]++;
            } 
            birth++
        }
    }
    for (let population in populations) {
        if (populations[population] > amountOfPeopleAlive) {
            amountOfPeopleAlive = populations[population];
            minYear = population;
        } else if (populations[population] === amountOfPeopleAlive) {
            minYear = Math.min(minYear, population);
        }
    }
    return minYear;
};