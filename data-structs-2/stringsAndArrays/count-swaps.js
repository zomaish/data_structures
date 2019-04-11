

const countSwaps = (arr) => {
  let swaps = 0;
  const arrPos = Array.apply(null, Array(arr.length)).map((e, idx) => [arr[idx], idx]);
  arrPos.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  });

  const visited = Array.apply(null, Array(arr.length)).map(Boolean.prototype.valueOf, false);

  for (let i=0; i<arrPos.length; i++) {
    let countCycles = 0;
    let j=i;

    while(!visited[j]) {
      visited[j] = true;
      j=arrPos[j][1];
      countCycles +=1;
    }

    if (countCycles>0)
    swaps += countCycles -1;
  }
  
  return swaps;
  
};



const swap = (arr, a, b) => {
  let t = arr[a]
  arr[a] = arr[b]
  arr[b] = t;
}

const countSwaps = (arr) => {
  const dup = new Array(arr.length)
  for (let i=0; i<arr.length; i++) {
    dup[i] = [arr[i], i]
  }

  dup.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0
  });

  console.log('dup', dup)

  const visited = Array.apply(null, Array(arr.length)).map(Boolean.prototype.valueOf, false);

  let steps = 0;

  for (let i=0; i<dup.length; i++) {
    if (dup[i][1] === i) {
      visited[i] = true;
    }
    else {
      if (visited[i]) continue;
      steps++
      swap(arr, dup[i][1], dup[dup[i][1]][1])
      swap(dup, dup[i][1], dup[dup[i][1]][1])
      console.log([...arr])
    }  
  }
  console.log('steps', steps)
}



console.log(countSwaps([1, 5, 4, 3, 2]));


const countSwaps = (arr) => {
  const c = [...arr.entries()];
 
  let swaps = 0;

  const visited = Array.apply(null, Array(arr.length)).fill(false);
  for (let i=0; i<arr.length; i++) {
    let j = i;
    while (!visited[j]) {

      const nextIdx = c[j][1]-1;
      console.log(c[j][1]-1,' === ',j)
      if (nextIdx === j) {
        visited[j] = true;
        break;
      }

      const temp = c[nextIdx]

      c[nextIdx] = c[j]
      c[j] = temp
      ++swaps;
    }
  }

  return swaps
}
console.log(countSwaps([2, 5, 4, 3, 1]));
