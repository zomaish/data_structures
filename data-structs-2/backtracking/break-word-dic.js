

const dictionary = {
  i: {v: 'i', u: 0}, 
  like: { v: 'like', u: 0}, 
  sam: { v: 'sam', u: 0}, 
  sung: { v: 'sung', u: 0}, 
  samsung: { v: 'samsung', u: 0}, 
  mobile: { v: 'mobile', u: 0}, 
  ice: { v: 'ice', u: 0}, 
  cream: { v: 'cream', u: 0}, 
  icecream: { v: 'icecream', u: 0}, 
  man: { v: 'man', u: 0}, 
  go: { v: 'go', u: 0}, 
  mango: { v: 'mango', u: 0}
};

const breakWordUtil = (str, n, res) => {
  // console.log('str', str, 'n', n, 'res', res)
  let tres = res;
  for (let e=1; e<=n; e++) {
      const w = str.substring(0, e);
      const d = dictionary[w];

      // console.log('e is ++++++++++++', e, 'str', str, 'word:', w)

      if (d) {
          // console.log('----------- ya boi', w)
          if (e === n) {
              tres = tres + w;
              console.log('found ', tres)
              return;
          };
          const newStr = str.substring(e, n);
          breakWordUtil(newStr, newStr.length, tres + w + " ", true);
      }
  }
}

const breakWord = (str) => {

  const n = str.length;
  const res = [];

  breakWordUtil(str, n, '')
          

}


const str = 'ilikesamsungmobile';

const str2 = 'ilikeicecreamandmango';

breakWord(str);