
const doSum = (a, b) => {
  if (b===0) return a;

  const sum = a ^ b; //sum without carry
  const carry = (a & b) <<1; // get carry bits

  return doSum(sum, carry) //shift carry bit since it will afect next but in sum
}

console.log(doSum(123, 23))