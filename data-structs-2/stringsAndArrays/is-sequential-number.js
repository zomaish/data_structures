
const getDigitOfLength = (num, start, len) => {
  const c = num.substring(start, start+len);
  return parseInt(c);
};


const isIncreasingNumberUtil = (num, digitLen, pos) => {
  if (pos+digitLen >= num.length) return true;
  if (digitLen > parseInt( num.length/2)) return false;

  let newDigitLen = digitLen;

  const digit = getDigitOfLength(num, pos, digitLen);
  if (Math.pow(10, digitLen)-digit === 1) newDigitLen +=1;

  const nextNum = getDigitOfLength(num, pos+digitLen, newDigitLen);
  
  if ((nextNum - digit) === 1) {
    return isIncreasingNumberUtil(num, newDigitLen, pos+digitLen)
  } else {
    return isIncreasingNumberUtil(num, digitLen+1, 0)
  }
}

const isIncreasingNumber = (num) => {
  return isIncreasingNumberUtil(num, 1, 0);
}


console.log(isIncreasingNumber("45678910"));
console.log(isIncreasingNumber("91011121314"));
console.log(isIncreasingNumber("99100101102"));
console.log(isIncreasingNumber("999100010011002"));
 