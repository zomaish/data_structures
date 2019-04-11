





const findMissingNumbersNaive = (arr) => {
  const cache = {};

  for (let i=0; i<arr.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(cache, arr[i])) {
      cache[arr[i]] = false
    } else {
      cache[arr[i]] = true
    }
  }

  Object.keys(cache).forEach((k) => {
    if (cache[k] === false) console.log(k)
  });
};


const findMissingNumbers = (arr) => {
  let xor = 0;
  let x = 0, y = 0;
  for (let i=0; i<arr.length; i++) {
    xor ^= arr[i];
  }

  console.log('xor ', xor)
  
  const rmb = (xor & ~ (xor-1));


  console.log('rmb', rmb)

  for (let i=0; i<arr.length; i++) {

    console.log('arr[i]', arr[i])
    if (arr[i] & rmb) {
      x ^= arr[i]
      console.log('x is now', x);
    } else {
      y ^= arr[i]
      console.log('y is now', y);
    }
  }

  console.log('x', x, 'y', y)

}

const findMissingNums = (arr) => {
  let xor =0;

  for (let i=0; i<arr.length; i++) {
    xor ^= arr[i];
  }

  const pivot = parseInt(xor/2);
  let left=0, right=0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] <= pivot)
      left ^= arr[i];
    else {
      right ^=arr[i]
    }
  }

  return [xor ^ left, xor ^ right]
}


const arr = [1,2,3,4,5,6,7,8,9,10,11,12,14,13,15,16,17,18,19, 1,2,3,4,5,6,7,8,9,11,12,14,13,15,16,17,19];

findMissingNumbers(arr)