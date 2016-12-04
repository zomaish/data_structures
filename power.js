function pow(b, p) {
  if (p === 1) return b;
  
  if (b&1) return (b*b * pow(b, p>>1))
  return b * pow(b, p-1)
}


function pow(b, p) {
  let res = 1;
  
  while(p>0) {
    if (p&1)
      res *= b;
   
    b *= b;
    p = p>>1;
  }
  
  return res;
}

function isPow2(n) {
  console.log(!(n & (n-1)));
}