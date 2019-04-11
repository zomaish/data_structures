
//https://leetcode.com/problems/minimum-window-substring/
const minWindowSubStr = (str, pat) => {
  const pos = new Map();
  const cache = new Array(pat.length).fill(Number.MAX_SAFE_INTEGER);
  let minLength = Number.MAX_SAFE_INTEGER;

  pat.split("").forEach((c, idx) => {
    pos.set(c, idx);
  });

  for (let i=0; i<str.length; i++) {
    const c = str[i];
    if (pos.has(c)) {
      cache[pos.get(c)] = i;

      minLength = Math.min(
        minLength,
        Math.max.apply(null, cache) - Math.min.apply(null, cache)
      );

      if (minLength === pat.length-1) return minLength;
    }
  }

  console.log('minLength', minLength)
};


 S = "ABCDOBECODEBANC", T = "ABC"

 minWindowSubStr(S, T);