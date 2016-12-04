
//diff between tow files

//Rec O(2^n)
function lcs(arr1, arr2, m, n) {
  if (m===0 || n===0) return 0;
  
  if (arr1[m-1] === arr2[n-1])
    return 1+ lcs(arr1, arr2, m-1, n-1);
  
  return Math.max(lcs(arr1, arr2, m-1, n), lcs(arr1, arr2, m, n-1))
}


//DP O(mn)
function lcsDP(arr1, arr2, m, n) {
  let l = Array.apply(null, Array(m+1)).map(() => {
            return Array.apply(null, Array(n+1)).map(Number.prototype.valueOf, 0);
          });

  for (let j=0; j<=m; j++) {
    for (let k=0; k<=n; k++) {      
      if (j===0 || k===0)
        l[j][k] = 0;
      else if (arr1[j-1] === arr2[k-1])
        l[j][k] = 1+ l[j-1][k-1];
      else
         l[j][k] = Math.max(l[j-1][k], l[j][k-1]);
    }
  }
  
  return l[m][n];
}


let X = "AGGTAB";
let Y = "GXTXAYB"

console.log("rrr", lcs(X, Y, X.length, Y.length))
console.log("dp", lcsDP(X, Y, X.length, Y.length))