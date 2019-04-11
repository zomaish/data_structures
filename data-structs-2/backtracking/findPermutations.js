const swap = (arr, l, r) => {
  const temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
  return arr.join('');
}

const permuteUniqueString = (str, l, r) => {
  /**
   * for every char c in str
   * choose c
   * premute the rest
   * unchoose c
   * 
   *  O(n*n!) time complexity
   */


   console.log('str before ---', str)
   if (l===r) {
     console.log("++++++", str.join(""))
     return
   }

   for (let i=l; i<=r; i++) {
     swap(str, l, i);
     permuteUniqueString(str, l+1, r);
     swap(str, l, i)
   }
};



const str = '012';

// permuteUniqueString([1,2,3], 0, str.length-1)

const addValToRes = (num, res) => {

  // console.log('res is now', res)
  if (!res.length) return [[num]];

  const ret = [];
  for (let i=0; i<res.length; i++) {
    const arr = res[i];

    for (let j=0; j<=arr.length; j++) {
      const left = arr.slice(0, j);
      const right = arr.slice(j, arr.length);
      ret.push([...left, num, ...right]);

      // console.log('ret is now ----', [...ret]);
    }
  }
  return ret
}

const printAllPermsItr = (nums) => {
  if (!nums.length) return;

  const arr = [...nums];
  let res = [];

  for (let i=0; i<arr.length; i++) {
    res = addValToRes(arr[i], res)
    console.log('res is now', res)
  }

  for (let i=0; i<res.length; i++) {
    console.log(res[i]);
  }
}


// // permuteUniqueString(str.split(''), 0, str.length-1);
// printAllPermsItr(str.split(''), 0, str.length-1);


function getAllPermutations(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = getAllPermutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);

      console.log('resulst ------', results)
    }
  }
  return results;
}

console.log(JSON.stringify(getAllPermutations('012')))
