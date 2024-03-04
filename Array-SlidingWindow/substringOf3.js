/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let left = 0;
  let right = 0;
  let count = 3;
  let result = [];
  while (right < s.length) {
    right++;
    if (right - left === count) {
      result.push(s.substring(left, right));
      left++;
    }
  }
  let value = result.filter((x) => new Set(x).size == 3).length;
  return value;
};

let s = "xyzzaz";
console.log(countGoodSubstrings(s));
s = "aababcabc";
console.log(countGoodSubstrings(s));
