var carPooling = function(trips, capacity) {
    trips = trips.sort((a, b) => a[1] - b[1]);
    let passengers = trips[0][0];
    for (let i = 1; i < trips.length; i++) {
        let current = trips[i];
        for (let j = 0; j < i; j++) {
            if (current[1] >= trips[j][2]) {
                passengers -= trips[j][0];
                trips[j][0] = 0
            }
        }
          passengers += current[0];
          if (passengers > capacity) return false;
    };
    return true
};