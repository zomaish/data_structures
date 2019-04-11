const isMatch = (str, pat) => {
  const rows = str.length;
  const cols = pat.length;
  const dp = Array.apply(null, Array(rows+1)).map(() => Array.apply(null, Array(cols+1)));

  dp[0][0] = true;

    //handle b*a*
  for (let c=1; c<=cols; c++) {
    dp[0][c] = false;
    if (pat[c] === "*") {
      dp[0][c] = dp[0][c-2];
    }
  }

  for (let r=1; r<=rows; r++) {
    dp[r][0] = false;
  }

  for (let r=1; r<=rows; r++) {
    for (let c=1; c<=cols; c++) {
      if (str[r-1] === pat[c-1] || pat[c-1] === ".") {
        dp[r][c] = dp[r-1][c-1];
      } else if (pat[c-1] === "*") {
        dp[r][c] = dp[r][c-2];
        if (!dp[r][c] && (pat[c-2] === str[r-1] || pat[c-2] === ".")) {
          dp[r][c] = dp[r-1][c];
        }
      } else {
        dp[r][c] = false;
      }
    }
  }

  console.log(JSON.stringify(dp));
// 
};


// const s = "mississippi", p = "mis*is*.p*.";
const s = "aaca", p = "aab*.a";

isMatch(s, p);
