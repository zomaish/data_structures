


const printTransformUtil = (arr, l, r) => {
  if (r>arr.length || l>=r) return;

  const w1 = arr[l];
  const w2 = arr[r]
};

const printTransformableStrings = (arr) => {
 
  let i = 0;
  let j = 1;

  printTransformUtil(arr, i,  j)
};


//["AB", "BC", "ZA", "wo", 'sd', "FOO", "BAZ"]

const arr = ["AB", "BC", "FOO", "ZA", "BAZ"];

printTransformableStrings(arr);