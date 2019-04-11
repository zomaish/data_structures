//https://leetcode.com/problems/median-of-two-sorted-arrays/

const arr1 = [4,5];
const arr2 = [1,2,3];



const findMedianSortedArrays = (A, B) => {
  const len1 = A.length;
  const len2 = B.length;
  if (len1 > len2) {
    return findMedianSortedArrays(B, A);
  }

  let l = 0; r = len1, half = parseInt((len1+len2+1)/2);

  while(l<=r) {
    const mid1 = parseInt((l+r)/2);
    const mid2= half-mid1;

    if (mid1 > l && A[mid1-1] > B[mid2]) {
      r = mid1 -1;
    } else if (mid1 < r && A[mid1] < B[mid2-1]) {
      l = mid1 + 1;
    } else {
      let maxLeft = 0;
      if (mid1 === 0)  maxLeft = B[mid2-1];
      else if (mid2 === 0) maxLeft = A[mid1-1];
      else maxLeft = Math.max(A[mid1-1], B[mid2-1]);

      if (( (len1+len2) %2) === 1) return maxLeft;

      let maxRight = 0;
      if (mid1 === len1) maxRight = B[mid2];
      else if (mid2 === len2) maxRight = A[mid1];
      else maxRight = Math.min(A[mid1], B[mid2]);
      
      return (maxLeft + maxRight) /2;
    }
  }
};


console.log('res is ', findMedianSortedArrays(arr1, arr2))