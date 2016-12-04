//http://www.geeksforgeeks.org/generate-all-possible-sorted-arrays-from-alternate-elements-of-two-given-arrays/


function printAlternate(a, b, res, sa, sb, len, flag) {

  if (flag) {

    if (len > 0) {
       printArr(res, len+1);
    }

    for (let i=sa; i<a.length; i++) {
      //select from a
      if (len === 0) {
        res[len] = a[i];
        printAlternate(a, b, res, i+1, sb, len, !flag);
      } else {
        if (res[len] < a[i]) {
          res[len+1] = a[i];
          printAlternate(a, b, res, i+1, sb, len+1, !flag);
        }
      }
    }
  } else {
    for (let j=sb; j<b.length; j++) {
      if (res[len] < b[j]) {
        res[len+1] = b[j];
        printAlternate(a, b, res, sa, j+1, len + 1, !flag);
      }
    }
  }
}



function printArr(res, n) {

  const a = [];
  for(let i=0; i<n; i++)
    a.push(res[i])

    console.log(a)
}