const maxVolume = (hist) => {
  const leftMaxes = new Array(hist.length);
  let leftMax = 0;
  for (let i=0; i<hist.length; i++) {
    leftMax = Math.max(leftMax, hist[i]);
    leftMaxes[i] = leftMax;
  }

  console.log('leftMaxes', leftMaxes)


  let rightMax = 0;
  let sum = 0

  for (let i=hist.length-1; i>=0; i--) {
    rightMax = Math.max(rightMax, hist[i]);

    // console.log('secondTallest', secondTallest, 'hist[i]', hist[i], 'leftMaxes[i]', leftMaxes[i])
    // console.log('rightMax', rightMax, leftMaxes[i])
    let secondTallest = Math.min(rightMax, leftMaxes[i]);
    if (secondTallest > hist[i]) {
      console.log('rmin-m', secondTallest - hist[i])
      sum += secondTallest - hist[i];
    }
  }

  return sum
};

const hist = [4,0,0,1,0,0,3,0,1,2,0,5,2,0,3];
           //[4,4,4,4,4,4,4,4,4,4,4,5,5,5,5]
          // [4,4,4,4,4,4,4,4,8,8,8,8,8,8,8 ]
//leftMaxes  [4,4,4,6,6,6,6,6,8,8,8,8,8,8,8]

console.log(maxVolume(hist))