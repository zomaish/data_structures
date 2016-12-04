function editDistance(str1, str2, i, j) {

  if (i===0)
    return j;

  if (j===0)
    return i;
  
  if (str1[i] === str2[j])
    return editDistance(str1, str2, i-1, j-1); 
  
  return 1+ Math.min.apply(null, [editDistance(str1, str2, i-1, j-1),
                 editDistance(str1, str2, i, j-1),
                 editDistance(str1, str2, i-1, j)]
    );
  
}


const str1 = "sunday";
const str2 = "sunday";

console.log(editDistance(str1, str2, str1.length, str2.length));

function editDistance(str1, str2, m, n) {
  const lis = Array.apply(null, Array(m+1)).map(() => {
    return Array.apply(null, Array(n+1)).map(Number.prototype.valueOf, 0)
  });

  
  for (let i=0; i<=m; i++) {
    for (let j=0; j<=n; j++) {
      if (i===0)
        lis[i][j] = j;
      else if(j===0)
        lis[i][j] = i;
      else if (str1[i-1] === str2[j-1])
        lis[i][j] = lis[i-1][j-1];
      else
        lis[i][j] = 1+ Math.min.apply(null, [
          lis[i-1][j],
          lis[i][j-1],
          lis[i-1][j-1]
        ])
    }
  }
 return lis[m][n]                                                                                                                                
}

const str1 = "sunday";
const str2 = "saturday";


console.log(editDistance(str1, str2, str1.length, str2.length));

