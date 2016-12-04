
function mult(x, y) {
  let res =0;
  while(y!=0) {
  if (y&1) {
      res +=x;
    }
    
    x <<= 1;
    y >>= 1;
  }

  console.log(res)
}

mult(4, 5)