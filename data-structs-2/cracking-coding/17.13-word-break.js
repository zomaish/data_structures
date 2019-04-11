const dic = {
  i: {v: 'i'}, 
  like: { v: 'like'}, 
  sam: { v: 'sam'}, 
  sung: { v: 'sung'}, 
  samsung: { v: 'samsung'}, 
  mobile: { v: 'mobile'}, 
  ice: { v: 'ice'}, 
  cream: { v: 'cream'}, 
  icecream: { v: 'icecream'}, 
  man: { v: 'man'}, 
  go: { v: 'go'}, 
  mango: { v: 'mango'},
  and: { v: 'and'}
};


const breakWordUtil = (str, start, end, memo) => {
  if (start === end) {
    return true;
  }

  if (memo[start]) {
    return true;
  }

  for (let i=start+1; i<=end; i++) {
    // console.log('checking ', start, i,  str.substring(start, i))
    const subStr = str.substring(start, i)

    if (dic[subStr] && breakWordUtil(str, i, end, memo)) {
      console.log('found word', subStr);
      memo[start] = memo[start] || [];
      memo[start].push(subStr)
    }
  }

  return memo[start];
};

const breakWord = (str) => {
  const memo = Array.apply(null, Array(str.length+1)).map(Boolean.prototype.valueOf, false);
  for (let i=0; i<str.length; i++)
    if (breakWordUtil(str, i, str.length, memo)) {
      console.log('-------', [...memo])
    }
};


const str = 'jessandadamlikesamsungmobile';
breakWord(str);

// const str2 = 'ilikeicecreamandmango';
// breakWord(str2);

// class ParseResult {
//   constructor(inv, str) {
//     this.ivalid = inv;
//     this.parsed = str;
//   }
// }


// const breakWordUtil = (str, start, memo) => {

//   console.log('start', start)
//   if (start >= str.length) {
//     return new ParseResult(0, '');
//   }
//   if (memo[start]) {
//     return memo[start];
//   }

//   let bestInvalid = Number.MAX_VALUE;
//   let bestParsing = '';
//   let partial = '';
//   let index = start;

//   while(index < str.length) {
//     let c = str[index];
//     partial += c;

//     console.log("partial ", partial)
//     let invalid = dic[partial] ? 0 : partial.length;

//     console.log('invalid ', invalid)
//     if (invalid < bestInvalid) {
//       let result = breakWordUtil(str, index +1, memo);

//       if (invalid + result.invalid < bestInvalid) {
//         bestInvalid = invalid + result.invalid;
//         bestParsing = partial + ' ' +result.parsed;

//         if (bestInvalid === 0) break;
//       }
//     }
//     index += 1;
//   }

//   memo[start] = new ParseResult(bestInvalid, bestParsing);

//   // console.log('mem', memo)
//   return memo[start]
// };

// const breakWord = (str) => {
//   const res = breakWordUtil(str, 0, new Array(str.length));
//   console.log('res', res)
// };


// const str = 'jessandilikesamsungmobile';

// // const str2 = 'ilikeicecreamandmango';

// breakWord(str);