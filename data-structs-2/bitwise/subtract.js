
const subtract = (a, b) => {
  const x = Math.abs(a);
  const y = Math.abs(b)
  //find two's compliment
  return add(x, (~y) + 1);
}


const add = (a, b) => {
  if (b === 0) return a;
  const x = a^b;
  const carry = a&b;
  return add(x, carry<<1)
}

