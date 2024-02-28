/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let neededChars = {};
  let output = [];
  for (let i of p) {
    if (i in neededChars) {
      neededChars[i]++;
    } else {
      neededChars[i] = 1;
    }
  }
  let left = 0;
  let right = 0;
  let window = p.length;

  while (right < s.length) {
    if (neededChars[s[right]] > 0) {
      window--;
    }
    neededChars[s[right]]--;
    right++;

    if (window == 0) output.push(left);
    if (right - left == p.length) {
      if (neededChars[s[left]] >= 0) {
        window++;
      }
      neededChars[s[left]]++;
      left++;
    }
  }

  return output;
};

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".
