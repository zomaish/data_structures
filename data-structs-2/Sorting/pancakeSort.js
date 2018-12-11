
const pancakeSort = (arr) => {
  const n = arr.length;

  const maxI = arr.indexOf(Math.max.apply(null, arr));

  for (let i=n-1; i>=0; i--) {
    if (maxI !== i) {

      flip(arr, 0, maxI)

      flip(arr, 0, i);
    }
  }


}

const arr = [5, 12, 11, 13, 6, 7];


pancakeSort(arr)
console.log(arr)