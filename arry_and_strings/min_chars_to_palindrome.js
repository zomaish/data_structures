function minimumCharsToPalindrome(str) {
  const revStr = str.split("").reverse().join("");
  const str2 = str + "$" + revStr;
  const lps = new Array(str2.length);
  const n = str.length;
  findLpsFor(str, lps);
  
  console.log(n - lps[n-1])
}

function findLpsFor(str, lps) {
  let i=1, j=0;
  lps[0] = 0;
  
  const n = str.length;
  
  while(i<n) {
    if (str[i] === str[j]) {
      lps[i++] = ++j;
    } else {
      if (j===0) {
        lps[i++] = 0;
      } else {
        j = lps[j-1];
      }
    }
  }
}


const str = "AACECAAAA";

minimumCharsToPalindrome(str);