const sortArr = (arr) => {
  const n = arr.length;
  let lo = 0, temp;
  let hi = n-1;
  let i = 0;

  while(i<=hi) {
    switch(arr[i]) {
      case 0:
        temp = arr[lo];
        arr[lo] = arr[i];
        arr[i] = temp
        i++;
        lo++;
        break;
      case 1:
        i++;
        break;
      case 2:
        temp = arr[hi];
        arr[hi] = arr[i];
        arr[i] = temp;
        hi--;
        break;
    }
  }
};

const arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
sortArr(arr);

console.log(arr)
