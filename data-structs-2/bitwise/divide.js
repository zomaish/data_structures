const divide = (a, b) => {
  const sign = ((a<0) | (b<0)) ? -1 : 1;
  let res = 0;
  let x = a, y=b;

  for (let i=10; i>=0 && x>0; i--) {
    if ((y<<i) <= x) {
      x = x - (y<<i);
      res |= 1<<i
    }
  }
  return res*sign;
}


const a = 25;
const b = 5;
console.log(divide(25, 5));