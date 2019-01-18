


const countSort = (arr, exp) => {
  const count = Array.apply(null, Array(10)).map(Number.prototype.valueOf, 0);
  const res = new Array(arr.length);

  console.log('arr', arr)

  for (let i=0;i<arr.length; i++) {
    const digit = ((arr[i]/exp)%10)|0;
    count[digit] +=1;
  }

  for (let i=1; i<10; i++) {
    count[i] += count[i-1]
  }

  console.log('count', count)

  for (let i=arr.length-1; i>=0; i--) {
    const digit = ((arr[i]/exp)%10)|0;
    const pos = count[digit] -1;
    count[digit] -= 1;
    
    res[pos] = arr[i];
  }


  for (let i=0; i<arr.length; i++) {
    arr[i] = res[i];
  }

  console.log('arr is after', arr)
};


const radixSort = (arr) => {
  const max = Math.max.apply(null, arr);

  console.log('max is', max)
  for (let exp=1; (max/exp)|0 > 0; exp *=10) {
    console.log('exp', exp, '(max/exp)%10', (max/exp)|0)
    countSort(arr, exp);
  }
}

const arr = [170, 45, 75, 90, 802, 24, 2, 66];


radixSort(arr);

console.log(arr)