//multiply by 10 = n*2 + n*8 ==> n<<1 + n<<3
//https://www.geeksforgeeks.org/multiply-number-10-without-using-multiplication-operator/


const mul = (a, b) => {

  let x = a, y = b, res = 0;
  
  while (b>0) {
    x <<= 1;
    b >>=1;
    if (x&1) res += x
  } 

  return res;
}