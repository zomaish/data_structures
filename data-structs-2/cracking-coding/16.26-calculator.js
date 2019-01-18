

const findOperatorPositions = (str) => {
  const idxs = [];
  const validOperators = ['+', '-', '*', '/'];

  for (let i=0; i<str.length; i++) {
    if (validOperators.indexOf(str[i]) > -1) {
      idxs.push(i);
    }
  }

  return idxs;
};

const calcUtil = (str, pre, i, j, opIndices) => {
  if (j === opIndices.length) return pre;
  const op = str[opIndices[j]];
  let post;

  j += 1;

  if (j === opIndices.length) post = str.substring(i);
  else  post = str.substring(i, opIndices[j]);
  
  switch(op) {
    case '*':
    case '/':
    const res = eval(`${pre} ${op} ${post}`);
    return calcUtil(str, res, opIndices[j]+1, j, opIndices);
    case '+':
      return eval(`${pre} ${op} ${calcUtil(str, post, opIndices[j]+1, j, opIndices)}`)
    case '-':
      return calcUtil(str, `${op}${post}`|0, opIndices[j]+1, j, opIndices)
  }
}

const calc = (str) => {
  if (({}).toString.call(str) !== '[object String]' || str.length < 3) {
    throw new Exception('Invalid parameter passed to calc');
  }
  let res=0, i=0, j=0;
  const opIndices = findOperatorPositions(str);

  res = str.substring(i, opIndices[j]) | 0;
  i = opIndices[j] + 1;

  return calcUtil(str, res, i, j, opIndices);
};



// calc('2*3+5/6*3+15')
// console.log(calc('2*3+5/6*3+15'));

console.log(calc('-2*3+5/6*3+15'));