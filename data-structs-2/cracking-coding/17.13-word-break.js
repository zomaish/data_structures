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



class ParseResult {
  constructor(inv, str) {
    this.ivalid = inv;
    this.parsed = str;
  }
}


const breakWordUtil = (str, start, memo) => {

  console.log('start', start)
  if (start >= str.length) {
    return new ParseResult(0, '');
  }
  if (memo[start]) {
    return memo[start];
  }

  let bestInvalid = Number.MAX_VALUE;
  let bestParsing = '';
  let partial = '';
  let index = start;

  while(index < str.length) {
    let c = str[index];
    partial += c;

    console.log("partial ", partial)
    let invalid = dic[partial] ? 0 : partial.length;

    console.log('invalid ', invalid)
    if (invalid < bestInvalid) {
      let result = breakWordUtil(str, index +1, memo);

      if (invalid + result.invalid < bestInvalid) {
        bestInvalid = invalid + result.invalid;
        bestParsing = partial + ' ' +result.parsed;

        if (bestInvalid === 0) break;
      }
    }
    index += 1;
  }

  memo[start] = new ParseResult(bestInvalid, bestParsing);

  // console.log('mem', memo)
  return memo[start]
};

const breakWord = (str) => {
  const res = breakWordUtil(str, 0, new Array(str.length));
  console.log('res', res)
};


const str = 'jessandilikesamsungmobile';

// const str2 = 'ilikeicecreamandmango';

breakWord(str);