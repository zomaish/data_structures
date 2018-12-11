const isPalindromPermutation = (str) => {
  const base = "a".charCodeAt();
  let check = 0;
  let numberOfDups = 0;
  let len = str.length;

  for (let i = 0; i<str.length; i++) {
    if (str[i] !== " ") {
      let charAscii = str[i].charCodeAt();
      let value = charAscii - base;
      let mask = (check & (1<<value))
      if ( mask > 0) {
        ++numberOfDups;
        
        //turn off that bit if already found
        check &= ~mask;
        console.log("check", check, "val ", value, " mute", muteBit(check, value))
      } else {
        check |= (1<<value);
      }
    } else {
    	--len;
    }
  }

  console.log('check is ', check)
  return numberOfDups === Math.floor(len/2);
}

const str = "tact coa";
console.log(isPalindromPermutation(str))
