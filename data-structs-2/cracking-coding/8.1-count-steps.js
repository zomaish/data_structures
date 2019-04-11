
const countSteps = (n) => {

  if (n===0) return 1;
  if (n<0) return 0;

  return countSteps(n-1) + countSteps(n-2) + countSteps(n-3)
}



const countStepsDP = (n) => {
  if (n <1) return 0;

  const res = new Array(n+1);
  res[0] = 1;
  res[1] = 1;
  res[2] = 2;

  if (n<3) return res[n];
  
  for (let i=3; i<=n; i++) {
    res[i] = res[i-1] + res[i-2] + res[i-3]
  }
  return res[n]


}

console.log(countStepsDP(4))