const merge = (arr) => {
  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] > b[1]) return 1;
      if (a[1] < b[1]) return -1;
      return 0;
    }

    if(a[0] > b[0]) return 1;
    return -1;
  });

  const res = [arr[0]];
  let j=0;
  
  for (let i=1; i<arr.length; i++) {
    const el1 = res[j];
    const el2 = arr[i];

    if (el2[0] >= el1[0] && el2[0] <= el1[1]) {
      const right = Math.max(el1[1], el2[1]);
      const el3 = [el1[0], right];
      res[j] = el3;
    } else {
      res[++j] = el2;
    }
  }
  return res
}

const int = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(int));