
// const isJumpingNumber = (num) => {
//   num = num + "";

//   for (let i=1; i<num.length; i++) {
//     if (Math.abs(num[i] - num[i-1]) > 1) return false; 
//   }

//   return true;
// };




const getDigitOfLength = (num, start, len) => {
  const c = num.substring(start, start+len);
  return parseInt(c);
 };
 
 
 const isIncreasingNumberUtil = (num, originalDigitLen, digitLen, pos) => {
  if (pos+digitLen >= num.length) return true;
  if (digitLen> parseInt( num.length/2)) return false;
 
  let newDigitLen = digitLen;
 
  const digit = getDigitOfLength(num, pos, digitLen);
  if (Math.pow(10, digitLen)-digit === 1) newDigitLen +=1;
 
  const nextNum = getDigitOfLength(num, pos+digitLen, newDigitLen);
   if ((nextNum - digit) === 1) {
    return isIncreasingNumberUtil(num, originalDigitLen, newDigitLen, pos+digitLen)
  } else {
    return isIncreasingNumberUtil(num, originalDigitLen+1, originalDigitLen+1, 0)
  }
 }
 
 const isIncreasingNumber = (num) => {
  return isIncreasingNumberUtil(num, 1, 1, 0);
 }

 

const numbers = Array.apply(null, Array(12)).map((e, i) => Math.pow(10, i+1));

const getNumber = (num, factor) => {
  const f = factor / 10;
  return (parseInt(num/f));
};
const getFirstFirstDigitAndRemainder = (num) => {
  let number;

  if (num < 10) return [num, -1];

//ignoring the first index since factor 10 has remainder 0
for (let i=1; i<numbers.length; i++) {
  if (num <= numbers[i]) {
    const f = numbers[i] / 10;
    number = (parseInt(num/f));
    return [number, num-number*f];
  }
}
};

const isJumpingNumberUtil = (digit, rem) => {
  if (rem < 0) return true;

 const [firstDigit, remainder] = getFirstFirstDigitAndRemainder(rem);
 if (Math.abs(digit-firstDigit) > 1) return false;

  if (isJumpingNumberUtil(firstDigit, remainder)) return true;
  else return false;
}

const isJumpingNumber = (num) => {
  const [firstDigit, remainder] = getFirstFirstDigitAndRemainder(num);
  return isJumpingNumberUtil(firstDigit, remainder);
};


console.log(isJumpingNumber(Math.abs(4343456)));
