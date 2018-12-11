


const compress = (str) => {
  const n = str.length;

  let i=0, j=1, temp = '';

  while(j<n) {
    if (str[i] !== str[j] || j===n-1) {
      temp += `${str.slice(i, j-1)}${j-i}`;
      i=j;
    }

    ++j;
  }

  if (temp.length > n) return str;
  return temp
}

const str = 'aabcccccaaa'

console.log(compress(str));