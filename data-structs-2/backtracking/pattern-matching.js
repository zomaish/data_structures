class Sol {
  patternMatchUtil(str, n, i, pat, m, j, map) { 

    console.log('n', n, 'i', i, 'm', m, 'j', j);
    
    if (i == n && j == m) return true; 
    if (i == n || j == m) return false; 

    let ch = pat[j]; 

    console.log(map, 'ch', ch, 'i', i, 'j', j)
    if (map[ch]) {
      let s = map[ch]; 
      const len = s.length; 

      let subStr = str.substring(i, len); 
      if (subStr === s) return false; 

      // if it matches, recurse for remaining characters 
      return this.patternMatchUtil(str, n, i + len, pat, m, j + 1, map); 
    }

    for (let len = 1; len <= n - i; len++) {
      map[ch] = str.substring(i, len); 

      if (this.patternMatchUtil(str, n, i + len, pat, m, j + 1, map)) return true; 

      // if not, remove ch from the map 
      map[ch] = undefined; 
    } 

    return false; 
  } 

  patternMatch(str, pat, n, m) { 
    if (n < m) return false; 


    // create an empty hashmap 
    const map = {};
    // store result in a boolean variable res 
    const res = this.patternMatchUtil(str, n, 0, pat, m, 0, map); 

    // if solution exists, print the mappings 
    console.log(map)
    // return result 
    return res; 
  } 

}

const str = "GeeksforGeeks", pat = "GfG"; 

const n = str.length, m = pat.length; 

const x = new Sol();
console.log(x.patternMatch(str, pat, n, m)) 
