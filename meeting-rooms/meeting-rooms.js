/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort(function(a, b) {
    var valueA, valueB;
    valueA = a[0]; // Where 1 is your index, from your example
    valueB = b[0]
    if (valueA < valueB) {
        return -1;
    }
    else if (valueA > valueB) {
        return 1;
    }
    return 0;
});
    for (let i = 0; i < intervals.length; i++) {
        let current = intervals[i];
        let next = intervals[i + 1];
        if (next) {
            if (current[1] > next[0]) {
                return false;
            }
        }
    }
    return true;
};