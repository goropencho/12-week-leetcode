var uniqueLetterString = function (s) {
  let hash = new Map();

  for (let i = 0; i < s.length; i++) {
    hash.has(s[i]) ? hash.get(s[i]).push(i) : hash.set(s[i], [i]);
  }
  console.log(hash);
  let count = 0;
  for (let [key, val] of hash) {
    for (let i = 0; i < val.length; i++) {
      let left = i == 0 ? val[i] + 1 : val[i] - val[i - 1];
      let right = i == val.length - 1 ? s.length - val[i] : val[i + 1] - val[i];

      count += left * right;
    }
  }

  return count;
};

let s = "ABC";
console.log(uniqueLetterString(s));
