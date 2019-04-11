

const mergeTwoSortedArrays = (arr1, arr2) => {
  
  const len1 = arr1.length;
  const len2 = arr2.length;
  if (!arr1 || len1 === 0) return [...arr2];
  if (!arr2 || len2 === 0) return [...arr1];

  let i=j=k=0;
  const res = new Array(len1+len2);
  while(i<len1 || j<len2) {
    let num1 = arr1[i];
    let num2 = arr2[j];

    if (num1<=num2) {
      res[k++] = num1;
      i++
    } else {
      res[k++] = num2;
      j++
    }
  }

  while(i<len1) {
    res[k++] = arr1[i++]
  }

  while(j<len2) {
    res[k++] = arr2[j]
  }

  console.log(res);
};



const nums1 = [1, 2]
const nums2 = [3, 4]

mergeTwoSortedArrays(nums1, nums2);
