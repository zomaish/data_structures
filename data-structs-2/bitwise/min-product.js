//Time complexity is log(small)

const mul = (small, big) => {

  console.log('getting in func ', small)
  if (small === 0) return 0;
  if (small === 1) return big;

  const res = mul((small >> 1), big);


  console.log(' after last rec ', small, res)
  if (small %2 === 0) return res + res;

  return res + res + big

}


console.log(mul(4, 6));