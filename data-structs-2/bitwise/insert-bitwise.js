

const setBit = (num, bit) => {

}

const unsetBit = (num, bit) => {}
const isBitSet = (num, bit) => {
  return ((num & (i<<bit)) === 1)
}

const updateBinary = (a, b, i, j) => {
  const numa = parseInt(a, 2);
  const numb = parseInt(b, 2);

  let m = 1;
  for(k=i; k<=j; k++) {
    if (isBitSet(numb, m++)) {
      setBit(numa, i)
    } else {
      unsetBit(numa, i)
    }
  }


}


updateBinary('10000000000', '10011', 2, 6)