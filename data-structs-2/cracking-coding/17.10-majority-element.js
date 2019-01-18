


const validateMajorityElement = (arr, e) => {
  let counter = 0;

  for (let i=0; i<arr.length; i++) {
    if (arr[i] === e) ++counter;
  }

  return coutner > (arr.length/2|0);
};

const majorityElement = (arr) => {
  let count = 0;
  let curr;
  for (let i=0; i<arr.length; i++) {
    if (count === 0) {
      curr = arr[i];
      count = 1;
    } else {
      if (arr[i] === curr) {
        count +=1;
      } else {
        count -= 1;
      }
    }
  }

  return curr;
};

const arr = [3,1,7,1,1,7,7,3,7,7,7];

console.log(majorityElement(arr));