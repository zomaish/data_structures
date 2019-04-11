const getArrLength = (arr) => {
  let len = 0;
  for (let i=0; i<arr.length; i++) {
    if (!Array.isArray(arr[i])) len +=1;
    else len += getArrLength(arr[i])
  }
  return len;
  console.log('len', len)
};

const flattenUtils = (arr, res, k) => {
  for (let i=0; i<arr.length; i++) {
    if (!Array.isArray(arr[i])) res[k++] = arr[i];
    else k = flattenUtils(arr[i], res, k)
  }

  return k;
}

const flatten = (arr) => {
  const len = getArrLength(arr);
  const res = new Array(len);
  flattenUtils(arr, res, 0);

  console.log(res, res.length)
};

const addSubArrToQueue = (subArr, q) => {
  for(let j=0; j<subArr.length; j++)
    q.push(subArr[j]);
}

const flattenItr = (arr) => {
  const res = [];
  const indecies = [0];
  const q = [arr];
  
  while(q.length) {
    temp = q.pop();
    i = indecies.pop();
    
    while (i<temp.length) {
      if (!Array.isArray(temp[i])) {
        res.push(temp[i++]);
      } else {
        q.push(temp);
        indecies.push(i+1);
        temp = temp[i];
        i = 0;
      }
    }
  }

  console.log(JSON.stringify(res))

}

flattenItr(['1','2','3','4','5','6','7','8','9', ['1','2','3','4',['5','6','7',['8','9']]], '1','2',['3'],'4']);



// const ones = [
//   ["1","0","1","0","0"],
//   ["1","0","1","1","1"],
//   ["1","1","1","1","1"],
//   ["1","0","0","1","0"]
// ];


// console.log(findMaxRect(ones))
