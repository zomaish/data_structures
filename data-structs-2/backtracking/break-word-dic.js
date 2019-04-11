

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

  let tres = "";
  // console.log('str', str, 'n', n, 'res', res)
  for (let e=1; e<=n; e++) {
      const w = str.substring(0, e);
      const d = dictionary[w];


      if (d) {
          // console.log('----------- ya boi', w)
          if (e === n) {
              res = res + w;
              console.log('found ', res)
              return res;
          };
          const newStr = str.substring(e, n);
          tres = breakWordUtil(newStr, newStr.length, res + w + " ");
      }
  }
  return tres
}

const breakWord = (str) => {

  const n = str.length;
  const res = [];

  console.log('waaaa --------- ', breakWordUtil(str, n, ''));
          

}


const str = 'ilikesamsungmobile';

const str2 = 'ilikeicecreamandmango';

breakWord(str);






// const wordBreak = (str, dic) => {

//   const visited = Array.apply(null, Array(str.length)).map(Boolean.prototype.valueOf, false);
//   const q = [0];

//   while(q.length) {

//     const start = q.pop();

//     for (let end = start + 1; end<=str.length; end++) {
//       if (!visited[start]) {
//         let word = str.substring(start, end);
//         console.log('word ', word, start, end)
//         if (dic[word]) {
//           q.push(end)
//           console.log('found', word, start, end, q);

//           if (start === str.length) return true;
//         }
//       } else {
//         console.log('=========== too bad, already visited', start)
//       }
//     }

//     visited[start] = true;
//   }

// };

// const str = "ilovesamsung";
// const dic = {
//   // "i" : "i",
//   "love" : "love",
//   "sam" : "sam",
//   "sung" : "sung",
//   "samsung" : "samsung"

// }

// wordBreak(str, dic)




