/**
 *
 * 
 * 0
 * 0.0
 * -1
 * 1e3
 * 1e-2
 * --4 false
 * +3 false
 * +-4 false 
 * 
 */

const isInt = (num, i) => {
  return !isNaN(parseInt(num[i]))
 };
const isValidPreMinus = (num, i) => {
  if (i===0) return true;
  else if (num[i-1] === 'e') return true;

  console.log('returning false isValidPreMinus')
  return false;
}

const isValidPower = (num, i) => {

 console.log('isValidPower', num, i)
  if (num[i] !== 'e') return false;
  if (num[i+1] === '-' && isInt(num, i+2)) return true;
  return isInt(num, i+1);
}

const isValidNumber = (num) => {

 if (!num.length || (num[0] != '-' && isNaN(num[0]))) return false;
 let i=1;
 while (i<num.length) {
   const c=num[i];

   console.log('checking ', c)
   switch(c) {
     case '-': 
       if(!isValidPreMinus(num, i) || !isInt(num, i+1)) return false;
       i+=2;
     break;
     case '.':
       if (!isInt(num, i-1) || !isInt(num, i+1)) return false;
       i+=2;
     break;
     case 'e': 
       if (!isInt(num, i-1) || !isValidPower(num, i)) return false;
       i+=2;
     break;
     default:
      if (!isInt(num, i)) return false;
      i +=1;
      break;
   }
 }

 return true;
}


console.log(isValidNumber("0.1e-10"))