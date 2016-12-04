
function permute(str) {
  const arr = str.split("");
  return permuteRec(arr, 0, arr.length-1);
}

function permuteRec(arr, start, end) {
  
  function swap(a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  
  if (start === end) {
    return arr
  } else {
    for (let i = start; i <= end; i++) {
      swap(start, i);
      permuteRec(arr, start+1, end);
      swap(start, i); //backtrack
    }
  }
  return arr
  
}



//Unique

function countChar(map, c) {
  map[c] = (map[c]>>0) + 1;
}

function permute(str) {
  let map = {};
  const l = str.length-1;
  const m = l / 2 | 0;
  let res = new Array(str.length), resultList = [];
  
  //don't optimize
  for (let i = 0; i <m; i++) {
    countChar(map, str.charAt(i));
    countChar(map, str.charAt(l-i));
  }
  
  countChar(map, str.charAt(m));
  if(l&1) {
    countChar(map, str.charAt(m+1));
  }
  
  
  permuteRec(Object.keys(map).join(""), map, res, 0, resultList);
  
  console.log(resultList);
}

function permuteRec(str, map, result, level, resultList) {
  if (level == result.length) {
    resultList.push(result.join(""));
    return;
  }

  for(let i = 0; i < str.length; i++) {
    if(map[str[i]] == 0) {
      continue;
    }
    result[level] = str[i];
    map[str[i]]--;
    permuteRec(str, map, result, level + 1, resultList);
    map[str[i]]++;
  }
}

