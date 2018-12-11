
const permuteUniqueString = (str, l, r) => {
  /**
   * for every char c in str
   * choose c
   * premute the rest
   * unchoose c
   */


   if (l===r) {
     console.log(str.join(""))
     return
   }

   for (let i=l; i<=r; i++) {
     swap(str, l, i);
     permuteUniqueString(str, l+1, r);
     swap(str, l, i)
   }
};

const swap = (arr, l, r) => {
  const temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
  return arr.join('');
}

const str = 'abcd';

permuteUniqueString(str.split(''), 0, str.length-1);
