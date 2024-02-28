/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let avg = Number.NEGATIVE_INFINITY;
  while (right < nums.length) {
    sum += nums[right];
    if (right - left + 1 == k) {
      avg = Math.max(avg, sum / k);

      sum -= nums[left];
      left++;
    }
    right++;
  }
  return avg;
};

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000
