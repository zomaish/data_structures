

const convertBsToAs = pat => pat.split("").map(c=> c==="a" ? "b" : "a").join("");

const isValidUtil = (str, pat, lenA, lenB) => {
  let compStr = "";
  let strPos = 0, patPos = 0;
  let cache = {};

  while(patPos<pat.length && strPos<str.length) {
    let p = pat[patPos++];
    let charsLen = 0;

    if (p === "a") {
      charsLen = lenA;
    } else {
      charsLen = lenB;
    }

    const strToAdd = str.substring(strPos, strPos+charsLen);
    if (!cache[p]) {
      cache[p] = strToAdd;
    } else if (strToAdd !== cache[p]) {
      return "";
    }

    compStr = compStr + strToAdd
    strPos += charsLen;
  }


  if (strPos < str.length || patPos < pat.length) {
    return "";
  }

  return compStr;
}

const isValid = (str, pat) => {
  
  if (pat[0] === "b") {
    pat = convertBsToAs(pat);
  }
  let ca = 0, cb=0;

  for (let i=0; i<pat.length; i++) {
    if (pat[i] === "b") cb +=1;
    else ca +=1;
  }

  const strLen = str.length;
  const maxAChars = parseInt((strLen-cb)/ca);
  const maxBChars = parseInt((strLen-ca)/cb);

  for (let lenA=1; lenA<=maxAChars; lenA++) {
    for (let lenB=1; lenB<=maxBChars; lenB++) {
      const compStr = isValidUtil(str, pat, lenA, lenB);
      if (compStr === str) return true
    }
  }

  return false;
}


let str = "bbbbbbaabbbaa";
let pat = "bbaba";

console.log(isValid(str, pat));

str = "GeeksforGeeks";
pat = "aba";


console.log(isValid(str, pat));