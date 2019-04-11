const mul = (a, b, res) => {
  if (b === 0) return 0;
  if (b === 1) return a;
  return (a<<1) + mul(a, b-2, res);
}
console.log('after all calls', mul(8,4))