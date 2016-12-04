function printAlternateArr(a, b) {
  let j;

  for (let i=0; i<a.length; i++) {
    let temp = [];

    j = getPartitionIndex(b, 0, b.length-1, a[i]);
    if (j===-1) return;
    
    for(let k = j+1; k<b.length; k++)
      console.log(a[i], b[k]);
    
    temp.push(a[i]);
    temp.push(b[++j]);
    
    for(let m=i+1; m<a.length; m++) {
      if (a[m]>b[j] && a[m]<b[++j])  {
        temp.push(a[m]);
        temp.push(b[j]);
      }
    }
    
    if (temp.length>2)
      console.log(temp.join(" "));
  }
}

function getPartitionIndex(arr, s, e, t) {
  if (s > e) return -1;

  let m = (e-s+1)/2 | 0;
  
  if (arr[m] <= t && t < arr[m+1]) return m;
  
  if (arr[m] > t) return getPartitionIndex(arr, s, m-1, t)
  else return getPartitionIndex(arr, m+1, e, t)
}


const arr1 = [10, 15, 25];
const arr2 = [1, 5, 20, 30];

printAlternateArr(arr1, arr2);