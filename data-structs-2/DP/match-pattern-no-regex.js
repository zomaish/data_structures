

const stringHasPatternUtil = (str, i, n, pat, j, m, map) => {

  if (i===n && j===m) return true;
  if (i===n || j===m) return false;


  // console.log('------------------ looking at pattern', pat[j], 'j', j, 'i', i)


  if (map[pat[j]]) {
    const s = map[pat[j]];
    const t = str.substring(i, i+s.length);

    // console.log('++++++++++ tried to match ', s, t)
    if (s!==t) return false;

    // console.log('************* matched', 'i', i+s.length, 'j', j+1)
    return stringHasPatternUtil(str, i+s.length, n, pat, j+1, m, map);

  } else {
     
    for (let len=1; len<=n; len++) {
      map[pat[j]] = str.substring(i, i+len);

      // console.log('adding subStr to pat', map, 'i', i, 'j', j);

      if (stringHasPatternUtil(str, i+len, n, pat, j+1, m, map)) {
        return true;
      }

      map[pat[j]] = ''

      // console.log('deleting', pat[j],  map)
    }
  }

  return false;
};

const stringHasPattern = (str, pat) => {
  const map = {};

  return stringHasPatternUtil(str, 0, str.length, pat, 0, pat.length, map)

};

const str = "GeefGee", pat = "GfG";

console.log(stringHasPattern(str, pat));