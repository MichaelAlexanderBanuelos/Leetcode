var findMaxAverage = function(nums, k) {
    let maxAvg;
    let windowStart = 0;
    let currentSum = 0
    let currentAvg = 0;
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        currentSum += nums[windowEnd];
        currentAvg = currentSum / k;
    
       if (windowEnd >= k - 1) {
               if (!maxAvg) {
          maxAvg = currentAvg
        }
            currentSum -= nums[windowStart];
            windowStart++;
            maxAvg = Math.max(currentAvg, maxAvg)
        }
    }
    return maxAvg;
};