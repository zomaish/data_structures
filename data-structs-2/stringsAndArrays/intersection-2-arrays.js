
//sorted
const findInterSection = (arr1, arr2) => {
  let i=0, j=0;

  const res = [];

  while(i<arr1.length && j<arr2.length) {
    if (arr1[i] === arr2[j]) {
      res.push(arr1[i]);
      i++;
      j++
    } else {
      if (arr1[i] > arr2[j]) {
        j++
      } else {
        i++
      }
    }
  }

  console.log(res)


};

let arr1 = [1,2,3,4,5,6,7,29, 40],
arr2 = [3,4,6,7,8,9]

findInterSection(arr1, arr2)