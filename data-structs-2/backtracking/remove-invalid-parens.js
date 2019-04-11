const removeInvalidParentheses = (s) => {
  res = {};
  let rmL = 0, rmR = 0;
  for(let i = 0; i < s.length; i++) {
      if(s.charAt(i) == '(') rmL++;
      if(s.charAt(i) == ')') {
          if(rmL != 0) rmL--;
          else rmR++;
      }
  }
  DFS(res, s, 0, rmL, rmR, 0, "");
  return Object.keys(res);
}

const DFS = (res, s, i, rmL, rmR, open, sb) => {
  if(i == s.length && rmL == 0 && rmR == 0 && open == 0) {
      console.log('sb', sb)
      res[sb] = true;
      return;
  }
  if(i == s.length || rmL < 0 || rmR < 0 || open < 0) return;

  const c = s[i];
  const len = sb.length;

  if(c == '(') {
      DFS(res, s, i + 1, rmL - 1, rmR, open, sb);
      DFS(res, s, i + 1, rmL, rmR, open + 1, sb + c); 

  } else if(c == ')') {
      DFS(res, s, i + 1, rmL, rmR - 1, open, sb);
      DFS(res, s, i + 1, rmL, rmR, open - 1, sb + c);

  } else {
      DFS(res, s, i + 1, rmL, rmR, open, sb + c); 
  }
}



countExrtaOpen = (str) => {
    let open = 0;
  
    for (let i=0; i<str.length; i++) {
      if (str[i] === '(') open +=1;
      else if (str[i] === ')' && open >0) open -=1;
    }
  
    return open;
  }
  
  countExrtaclosed = (str) => {
    let closed = 0;
    let open = 0;
  
    for (let i=0; i<str.length; i++) {
      if (str[i] === '(') open +=1;
      else if (str[i] === ')') {
        if (open > 0) open -= 1;
        else closed +=1;
      }
    }
  
    return closed;
  }
  
  
  
  const removeUtil = (str, open, closed, idx) => {
    if (open ===0 && closed ===0) {
  
      if (
        countExrtaOpen(str) === 0 
        && countExrtaclosed(str) === 0
      )
      console.log('found', str);
      return;
    }
  
    if (open < 0 || closed < 0 || idx === str.length) {
      return;
    }
  
    if (str[idx] === "(" && open>0) {
      const left = str.substring(0, idx);
      const right = str.substring(idx+1);
      removeUtil(left+right, open-1, closed, idx)
    }
  
  
    if (str[idx] === ")" && closed>0) {
      const left = str.substring(0, idx);
      const right = str.substring(idx+1);
      removeUtil(left+right, open, closed-1, idx)
    }
  
    removeUtil(str, open, closed, idx+1);
  }
  
  
  const removeInvalidParentheses = (str) => {
  
    const open = countExrtaOpen(str);
    const closed = countExrtaclosed(str);
  
    removeUtil(str, open, closed, 0)
  };
  
  


console.log(removeInvalidParentheses('()())()'));