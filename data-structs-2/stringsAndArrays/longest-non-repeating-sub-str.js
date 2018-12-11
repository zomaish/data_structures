const longetsNonRepeatingSubStringUtil = (str, l, r, len, res, dic) => {
  if (l>r || l >= str.length -1 || r>str.length-1) return;
  
  const lChar = str[l];
  const rChar = str[r];
  
  if (dic[lChar] === undefined) dic[lChar] = l;
  if (dic[rChar] === undefined || dic[rChar] < l) {
    dic[rChar] = r;
    
    return longetsNonRepeatingSubStringUtil(str, l, r+1, len+1, res, dic);
  }

  res.len = Math.max(res.len, len - 1);
  return longetsNonRepeatingSubStringUtil(str, dic[rChar] + 1, r, r - dic[rChar], res, dic);
}


const longetsNonRepeatingSubString = (str) => {
  let l = 0;
  let r = 1;

  const dic = Object.create(null);

  const res = {len: 0};
  
  longetsNonRepeatingSubStringUtil(str, l, r, (r-l+1), res, dic);
  console.log(res)
}


const str = 'gezeksforgeeks';

longetsNonRepeatingSubString(str)
