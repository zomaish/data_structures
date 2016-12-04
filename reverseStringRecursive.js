function reverseStr(str) {
  return reversStrRec(str, new Array(str.length));
}

function reversStrRec(str, temp, index) {
  index = index >> 0;

  let lastIndex = str.length-1;

  if (index > lastIndex || str.length < 1) {
    return temp.join("");
  }
  
  temp.push(str.charAt(lastIndex-index));
  return reversStrRec(str, temp, ++index);
}
