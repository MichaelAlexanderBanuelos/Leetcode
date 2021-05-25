var largestAltitude = function(gain) {
    let currentAlt = 0;
    let maxSeen = Math.max(0, gain[0]);

    for (let i = 0; i < gain.length; i++) {
        currentAlt += gain[i];
        maxSeen = Math.max(maxSeen, currentAlt + gain[i + 1] || 0);
    }
    return maxSeen;
};