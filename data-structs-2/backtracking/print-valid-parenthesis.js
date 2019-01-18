

const removeUtil= (str, i, n) => {
  if (isValidStr(str)) {
    return true;
  }

  for (let j=i; j<n; j++) {
    let newStr = str.substring(0, j) + str.substring(j+1);

    if (removeUtil(newStr, n, j+1)) return newStr;

    return false;
  }

  return false;
};



const removeInvalidParenthesis = (str) => {
  const n = str.length;
  if (n < 2) return;

  console.log(removeUtil(str, 0, n));
};



let expression = "()())()"; 
removeInvalidParenthesis(expression); 

expression = "()v)"; 
removeInvalidParenthesis(expression); 