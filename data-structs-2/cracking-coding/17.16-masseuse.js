

let max = Number.MIN_VALUE;


const calcLongestTimeUtil = (appts, idx, memo) => {
  if (idx >= appts.length) {
    return 0;
  }

  if (memo[idx] === 0) {
    const bestWith = appts[idx] + calcLongestTimeUtil(appts, idx+2, memo);
    const bestWithout = calcLongestTimeUtil(appts, idx+1, memo);
    memo[idx] = Math.max(bestWith, bestWithout)
  }

  return memo[idx];
};

const calcLongestTime = (appts) => {
  return calcLongestTimeUtil(appts, 0, Array.apply(null, Array(appts.length)).map(Number.prototype.valueOf, 0));
};



const calcLongestTimeItr = (appts) => {

  let oneAway = 0;
  let twoAway = 0;

  for (let i=appts.length; i>=0; i++) {
    
  }
};


const appts = [30, 15, 60, 75, 45, 15, 15, 45];

// const longestTime = calcLongestTime(appts)
const longestTime = calcLongestTimeItr(appts)

console.log(longestTime)