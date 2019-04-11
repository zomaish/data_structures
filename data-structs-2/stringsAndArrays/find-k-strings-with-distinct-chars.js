



const findKstringsWithDistinctChars = (str, k) => {
  let len = 0;
  const map = {};
  let s = 0;
  let m = 0;
  for (let i=0; i<str.length; i++) {

    const c = str[i];
    if (!map.hasOwnProperty(c)) {
      map[c] = 1
      len++;
    } else {
      map[c] +=1;
    }

    if (len <= k) {
      m = Math.max(m, i-s+1)
    } else {
      while(len>k) {
        map[str[s]] -=1
        if (map[str[s]] === 0) {
          delete map[str[s]];
          len--;
        }
        s++;
      }
    } 
  }
  console.log(m, map);
};


//[1,2,3,2,2]
const str = "111111122333111333";
findKstringsWithDistinctChars(str, 2)