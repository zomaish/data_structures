
const longestCommonSubsquence = (str1, str2) => {

  const res = Array.apply(null, Array(str1.length+1)).map(() => Array.apply(null, Array(str2.length+1)).map(Number.prototype.valueOf, 0));

  for (let i=1; i<=str1.length; i++) {
    for (let j=1; j<=str2.length; j++) {

      if (str1[i-1] === str2[j-1]) {
        res[i][j] = 1+res[i-1][j-1];
      } else {
        res[i][j] = Math.max(res[i-1][j], res[i][j-1]);
      }
    }
  }

  console.log(res)
  return res[str1.length][str2.length];
};



const str1 = "AABCDGH";
const str2 = "AEDFHR";

/**
  LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3.
  LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.
*/
console.log(longestCommonSubsquence(str1, str2));