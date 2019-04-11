const pow = (base, e) => {
  if (e === 0) return 1;

  let res = pow(base, e >> 1);

  if (e & 1) {
    return res*res*base;
  } else {
    return  res*res;
  }
}



const mypow = (base, e) => {
  if (e<0) {
    base = 1/base;
    e = Math.abs(e)
  }

  return pow(base, e)
}
console.log(mypow(2, 4));



const arr = [1,2,3,4,5,0,6,234,56,5,34,23,1,346];


const hasZero = (a, i) => {

  if (i>=a.length) return false;
  if (a[i] !== 0) 
    return hasZero(a, i+1);

  return true;
}