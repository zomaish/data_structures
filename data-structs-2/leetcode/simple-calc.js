//https://leetcode.com/problems/basic-calculator/

const getParenExpr = (input, s) => {

  let open = 1;
  for (let i=s+1; i<input.length; i++) {
    if (input[i] === "(") open+=1;
    else if (input[i] === ")") {
      open -=1;
      if (open === 0) return i;
    }
  }

  return -1;
}

const add = (acc, val, sign) => {
  if (sign === "+") return acc += parseInt(val)
  return acc -= parseInt(val);
}


const calc = (input) => {

  const q = [];
  let i = 0;

  while(i<input.length) {
    if (input[i] ==="(") {
      const exprEndIdx = getParenExpr(input, i);
      const expr = input.substring(i+1, exprEndIdx);
      q.push(calc(expr));
      i = exprEndIdx+1;
    } else {
      q.push(input[i++])
    }
  }
  console.log('q', q)

  let res = 0;
  let sign = "+";
  while(q.length>0) {
    const e = q.shift();

    if (e === "-" || e === "+") {
      sign = e;
    } else {
      res = add(res, e, sign)
    }
  }

  return res;
};

// const input = "2-(1+(4+5+2)-3)+(6+8)";
const input = "2-1 + 2";
console.log(calc(input, 0, 0, input.length-1))

//[[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
