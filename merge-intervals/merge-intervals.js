var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let merged = [intervals[0]];
    for (let i = 0; i < intervals.length; i++) {
      let last = merged[merged.length - 1];
      if (last[1] >= intervals[i][0]) {
        last[1] = Math.max(intervals[i][1], last[1])
      }
      else {
        merged.push(intervals[i])
      }
    }
    return merged;
};
