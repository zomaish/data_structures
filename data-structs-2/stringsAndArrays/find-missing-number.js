





const getDigitWithLength = (num, pos, len) => {
  return parseInt(num.substring(pos, pos+len))
}

const endsWithEightOrNine = (digit, digitLen) => {
  return (Math.pow(10, digitLen) - digit) < 3
}

const findMissingNumberUtil = (num, pos, digitLen, currSum, sum) => {

  if (pos + digitLen === num.length) {
    return sum - (currSum + getDigitWithLength(num, pos, digitLen));
  }

  if (pos+digitLen > num.length) return Number.MIN_SAFE_INTEGER;

  const digit = getDigitWithLength(num, pos, digitLen);
  
  let newDigitLen = digitLen;
  let nextDigit = getDigitWithLength(num, pos+digitLen, digitLen);

  if (endsWithEightOrNine(digit, digitLen)) {
    let nextNextDigit = getDigitWithLength(num, pos+2*digitLen, digitLen);

    if (nextDigit <= digit) {
      newDigitLen +=1;
      nextDigit = getDigitWithLength(num, pos+digitLen, newDigitLen)
    }

    if (nextNextDigit && nextDigit < digit && nextNextDigit <= nextDigit) {
      return findMissingNumberUtil(num, pos, digitLen+1, currSum, sum);
    }
  }
  if (nextDigit - digit < 3)
    return findMissingNumberUtil(num, pos+digitLen, newDigitLen, currSum+digit, sum);
  else 
    return findMissingNumberUtil(num, 0, digitLen+1, 0, sum);

}

console.log(findMissingNumberUtil("89909192939495969798100101", 0, 1, 0, 1235));


const findMissingNumber = (num, sum) => {
  return findMissingNumberUtil(num, 0, 1, 0, sum)
  
}



// console.log(findMissingNumber("9899101102", 500))
// console.log(findMissingNumber("4567810", 49))
console.log(findMissingNumber("1011121314", 69))
4567810

91011121314 

99100101102
999100010011002