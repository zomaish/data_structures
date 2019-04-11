

const dfs = (num, pos, expr, target, res) => {
  if (pos === num.length) {
    // console.log('expr', expr, eval(expr))
    if (eval(expr) === target) {
      res.push(expr);
    }

    return;
  }

  for (let i=pos; i<num.length; i++) {
    const m = num.substring(pos, i+1);
    const n = parseInt(m);
    if (m[0] === "0" && m.length> 1) continue;
    if (!expr.length) {
      console.log("had and empty one", n)
      dfs(num, i+1, expr + n, target, res);
    } else {
      dfs(num, i+1, `${expr}+${n}`, target, res);
      dfs(num, i+1, `${expr}-${n}`, target, res);
      dfs(num, i+1, `${expr}*${n}`, target, res);
    }
  }
}


const addOperators = (num, t) => {
  const res = [];

  dfs(num, 0, "", t, res);
  return res;
};




// const num = "123", target = 6;
// const num = "00", target = 0;
const num = "123", target = 4;
console.log(addOperators(num, target));


/**
Input: num = "123", target = 6
Output: ["1+2+3", "1*2*3"] 
Example 2:

Input: num = "232", target = 8
Output: ["2*3+2", "2+3*2"]
Example 3:

Input: num = "105", target = 5
Output: ["1*0+5","10-5"]
Example 4:

Input: num = "00", target = 0
Output: ["0+0", "0-0", "0*0"]
Example 5:

Input: num = "3456237490", target = 9191
Output: []

 */