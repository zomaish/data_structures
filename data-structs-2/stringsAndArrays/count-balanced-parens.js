const countBalancedParens = (str) => {
  let open = 0;
  let balanced = 0;

  for (let i=0; i<str.length; i++) {
    
    if (str[i] === '(') {
      open +=1;
    } else if (open>0) {
      balanced +=1;
      open -=1;
    }
  }

  return balanced * 2;
};


console.log(countBalancedParens('((()'))
console.log(countBalancedParens(')()())'))

