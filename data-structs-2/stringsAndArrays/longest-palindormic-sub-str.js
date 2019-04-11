


const findLongestPalindormicSubStrUtil = (str, l, r) => {
  while(l>=0 && r<str.length && str[l] === str[r]) {
    l--;
    r++;
  }

  return r-1-l;
}

const findLongestPalindormicSubStr = (str) => {

  let max = 0;
  let start = 0;
  let end = 0;

  for (let i=0; i<str.length; i++) {
    const len1 = findLongestPalindormicSubStrUtil(str, i, i);
    const len2 = findLongestPalindormicSubStrUtil(str, i, i+1);

    const len3 = Math.max(len1, len2);
    if (len3 > end-start+1) {
      console.log('i ----', i, len3)
      start = i - parseInt((len3-1)/2);
      end = i+ parseInt(len3/2);
    }
    max = Math.max.apply(null, [max, len2, len1]);
  }

  console.log('max is ', max, str.substring(start, end+1))
};




// const str = "forgeeksskeegfor";
const str = "bbb";
findLongestPalindormicSubStr(str);





