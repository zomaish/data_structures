
const permuteUniqueString = (str, l, r) => {
  /**
   * for every char c in str
   * choose c
   * premute the rest
   * unchoose c
   */
};

const swap = (str, l, r) => {
  const arr = str.split('');

  const temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
  return arr.join('');
}

const str = 'abc';

permuteUniqueString(str, 0, str.length-1);
