

const merge = (arr, temp, l, m, r) => {

  let i=l, j=m+1, k=l;

  while(i<=m && j<=r) {

    console.log(arr[i], ' < ', arr[j])
    if(arr[i]<arr[j]) {
      temp[k++] = arr[i++]
    } else {
      temp[k++] = arr[j++]
    }
  }

  while (i<=m) {
    temp[k++] = arr[i++]
  }

  while (j<=r) {
    temp[k++] = arr[j++]
  }
 
  console.log('temp', temp)
}
const mergeSort = (arr, temp, l, r) => {
  if (l>=r) return;

  const m = (r+l)/2 |0;

  mergeSort(arr, temp, l, m)
  mergeSort(arr, temp, m+1, r)
  
  merge(arr, temp, l, m , r);

  console.log(temp)
  return temp;
}








const arr = [12, 11, 13, 5, 6, 7];

mergeSort(arr, new Array(arr.length), 0, arr.length-1)