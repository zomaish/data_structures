




const calcUtil = (expr, l, r) => {
  if (l>r) return 0;

  let op = getNextOpIdx(expr, l, r);
  let left = getLeftPos(expr, l, r);
  let right = getRightPos(expr, l, r);
  let res = 0;

  switch(op) {
    case "*":
    case "/":
      res += eval(`${expr.subString(l, left+1)} ${expr[op]} ${expr.subString(op+1, right+1)}`);
    break;
    case "+":
      const t = op < 2 ? left : res;
      res += eval(`${expr.subString(l, left+1)} + ${calcUtil(expr, right+1, r)}`)
  }


  return res + calcUtil(expr, right+1, r);

}


const calc = (expr) => {



  res = calcUtil(expr, 0, expr.length-1);

}




console.log(calc('2*3+5/6*3+15'));