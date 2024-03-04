var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  let neededChar = {};
  for (let i = 0; i < s1.length; i++) {
    neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1;
  }
  let left = 0,
    right = 0,
    requiredLength = s1.length;

  while (right < s2.length) {
    if (neededChar[s2[right]] > 0) requiredLength--;
    neededChar[s2[right]]--;
    right++;

    if (requiredLength === 0) return true;
    if (right - left === s1.length) {
      if (neededChar[s2[left]] >= 0) requiredLength++;
      neededChar[s2[left]]++;
      left++;
    }
  }
  return false;
};

let s1 = "ab";
let s2 = "eidboaoo";
console.log(checkInclusion(s1, s2));
