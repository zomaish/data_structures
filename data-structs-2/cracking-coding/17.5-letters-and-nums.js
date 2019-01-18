const countDeltas = (arr) => {
  const deltas = new Array(arr.length);
  let delta = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === 'a') {
      delta += 1;
    } else {
      delta -=1;
    }
    deltas[i] = delta;
  }

  return deltas;
};

const findRanges = (deltas) => {
  const ranges = Object.create(null);

  for (let i=0; i<deltas.length; i++) {
    const delta = deltas[i];
    if (!ranges[delta]) {
      ranges[delta] = new Array(2);;
      ranges[delta][0] = i;
    } else {
      ranges[delta][1] = i;
    }
  }
  return ranges;
};

const getMaxRange = (ranges) => {
  let max = 0, key;

  Object.keys(ranges).forEach((k) => {
    const range = ranges[k];
    if ((range[1]-range[0]) > max) {
      max = range[1]-range[0];
      key = k;
    }
  })

  const res = ranges[key];
  return [res[0] + 1, res[1]]
}

const longestNumLetter = (arr) => {
  const deltas = countDeltas(arr);
  const ranges = findRanges(deltas);

  return getMaxRange(ranges);
};

const arr = ['a','a','a','a',1, 1, 'a',1, 1, 'a','a',1, 'a','a',1, 'a','a','a','a'];

console.log(longestNumLetter(arr))