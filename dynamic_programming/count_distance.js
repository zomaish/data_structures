

function countDist(n) {

  if (n<0) return 0;
  if (n===0) return 1;

  return countDist(n-1) + countDist(n-2) + countDist(n-3);
}


function countDistDP(n) {
  const c = new Array(n+1);
  c[0] = 1;
  c[1] = 1;
  c[2] = 2;

  for(let i=3; i<=n; i++) 
    c[i] = c[i-1] + c[i-2] + c[i-3];

  return c[n]
}

console.log(countDistDP(2))
console.log(countDist(4))