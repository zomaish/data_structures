//https://leetcode.com/problems/frog-jump/solution/

const getAvailableLeapOptions = (stones, idx, leapSize) => {

  const res = [];
  for (let i=idx+1; i<stones.length; i++) {
    const diff = stones[i] - stones[idx];

    if (
      diff === leapSize-1
      || diff === leapSize
      || diff === leapSize +1
      ) {
        res.push(i)
      }
  }

  return res;
}

const canFrogLeapUtil = (stones, idx, leapSize) => {

  if (idx === stones.length-1) {
    return true;
  }

  
  const leapOptions = getAvailableLeapOptions(stones, idx, leapSize);

  console.log('leapsize', leapSize, leapOptions)
  console.log('leapOptions', leapOptions)
  if (leapOptions.length === 0) return false;

  for (let i=0; i<leapOptions.length; i++) {
    const nextStone = leapOptions[i]
    if (canFrogLeapUtil(stones, nextStone, stones[nextStone]-stones[idx])) return true;
  }

  return false;
}


const canCross = (stones) => {
  let leapSize = stones[1] - stones[0];
  if (leapSize > 1) return false;
  return canFrogLeapUtil(stones, 1, 1);
}

const stones = [0,1,3,5,6,8,12,17]

canCross(stones);
