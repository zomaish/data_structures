//https://en.wikipedia.org/wiki/Binary_number
  
function binaryadd(x, y) {
  while (x != 0) {
    let c = y & x;
    y = y ^ x;
    x = c << 1;
  }
  return y;
}

console.log(binaryadd(27,5))


