


const getFreeLetter = (str, l, r) => {
  let res = "";

  console.log('calling getFreeLetter', str, l, r)
  while(str && l<=r) {
    const c = str[l];

    console.log("+++++++ c", c)

    if (!c || c === '[' || c === ']' || !isNaN(parseInt(c))) return res

    res += c;
    l++;
  }

  console.log('the res is ', res);

  return res;
}

const getCount = (str, l, r) => {
  let res = '';

  while (l<r) {
    const n = parseInt(str[l++])
    if (!isNaN(n)) res += n;

    else return res;
  }

  return res;
}

const getExpression = (str, l, r) => {
  let open = 1;
  let res = "";
  for (let i=l+1; i<=r; i++) {
    
    if ( str[i] === ']') {
      open--;

      if (open ===0) return res;
    }

    res += str[i]
    if ( str[i] === '[') open++;
  }

  return res;
}

const decompressUtil = (str, l, r, res)=> {
  if (!str || l>r) {
    return res;
  }

  const left = getFreeLetter(str, l, r);
  l += left.length;

  const count = getCount(str, l, r);
  l +=count.length;
  res += left;

  const expr = getExpression(str, l, r);
  const s = decompressUtil(expr, 0, expr.length, "")

  for (let i=0; i<parseInt(count); i++) {
    res += s;
  }

  l += expr.length + 2;

  return decompressUtil(str, l, r, res);
}

const decompress = (str) => {

  const res = "";
  decompressUtil(str, 0, str.length-1, res);

  console.log(res)
}



//53
//a3[b2[c1[d]]]e will be decompressed as abcdcdbcdcdbcdcde.
//a3[b2[c1[d]]]e2[f4[h]]                 abcdcdbcdcdbcdcde

decompress("a3[b2[c1[d]]]e")

//decompress("a",1) + decompressUtil("b2[c1[d]]", 3) + decompress("e", 1);




const getBraketsExpr = (str, start) => {

  let countOpen = 0;

  for (let i=start; i<str.length; i++) {
    if (str[i] === '[') countOpen+=1;
    else if(str[i] === ']') {
      countOpen -=1;
      if (countOpen === 0) {
        return str.substring(start, i+1)
      }
    }
  }
}
const isLetter = (c) => {
  const reg = /[a-z]$/g
  return reg.test(c);
}

const isNumber = (c) => {
  const reg = /[0-9]$/g
  return reg.test(c);
};

const decompressItr = (str) => {
  const idx = [0];
  const stack = [str];
  const temp = [""];
  let mul = [1];

  let res = '';
  
  while(stack.length) {
    let st = stack.pop();
    let tempStr = temp.pop();
    let i = idx.pop();
    // let m = mul.pop();

    console.log('i', i, stack)

    while(i<st.length) {
      if (isLetter(st[i])) {
        console.log('st[i]', st[i])
        tempStr +=st[i];
        i++;
      } else if(isNumber(st[i])) {
        mul.push(st[i]);
        i++;
      } else if (st[i] === '[') {
        stack.push(st);
        const br = getBraketsExpr(st, i);
        st = br.substring(1, br.length-1);

        console.log('br', br, st)
        idx.push(i+br.length);
        temp.push(tempStr);

        tempStr = '';
        i=0;        
      }
    }

    temp.push(tempStr);

    while(temp.length) {
      const chars = temp.pop();
      const times = mul.pop();
      let t = "";

      for (let i=0; i<times; i++) {
        t +=chars;
      }

      if (temp.length) {
        let x = temp.pop();
        x+=t;
        temp.push(x);

      } else {
        res +=t;
      }
    }

    temp.push("")
    mul.push(1)

  }

  console.log('res', res)

  
}

decompressItr("a3[b2[c1[d]]]e")
