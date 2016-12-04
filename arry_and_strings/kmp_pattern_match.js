
function kmpSearch(txt, pat, n, m) {
  
  const lps = findLPS(pat, m)

  let i = 0;
  let j = 0;
  
  while(i<n) {
    if (txt[i] === pat[j]) {
      i++; j++;
      
      if (j === m) {
        console.log("found a match at ", i-j)
        j = lps[j-1];
      }
    } else {
      if (j === 0) {
        i++;
      } else {
        j = lps[j-1];
      }
    }
  }

}

function findLPS(pat, m) {

  let i = 1;
  let j = 0;
  const lps = new Array(m);
  lps[0] = 0;

  while(i<m) {
    if (pat[i] === pat[j]) {
      lps[i++] = ++j;
    } else {
      if (j===0) {
        lps[i++] = 0;
      } else {
        j = lps[j-1];
      }
    }
  }
  
  return lps;
}


const txt = "AAAAABBAAAA";
const pat = "AAABBAAA";

kmpSearch(txt, pat, txt.length, pat.length);



//const pat = "ABABCABAB";
//computeLPSArray(pat, pat.length, [])
//kmp("ABABDABACDABABCABAB", pat);

//kmp("AAAABBAAAA", "AAABA");