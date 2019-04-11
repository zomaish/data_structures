


const longestValidParns = (parens) => {

  let longestValid = 0;
  const s = [-1];
  
  for (let i=0; i<=parens.length; i++) {
    if (parens[i] === "(") s.push(i)
    else if (parens[i] === ")" && s.length) {
      s.pop();

      if (!s.length) {
        s.push(i);
      } else {
        longestValid = Math.max(longestValid, i-s[s.length-1]);
      }
    }
  }

  console.log(longestValid)
  return longestValid;

}



const parens = "((()))(()())";
longestValidParns(parens);