


const longestNumLetter = (arr) => {
  let delats = 1;
  let lastIncDelta = 1;
  const range = new Array(2);
  const comp  = arr[0];
  for (let i=1; i< arr.length; i++) {
    if (arr[i] === comp) {
      deltas +=1;
      lastIncDelta +=1;
    } else {
      deltas -=1;

      if (deltas >=0) {
        const diff = lastIncDelta - deltas;
        range[0] = 2*(i)-1-diff;
        range[1] = 1;
      }
    }
  }
}






const arr = ['a','a','a','a',1, 1, 1,1, 'a',1, 1, 'a','a',1, 'a','a',1, 'a','a','a','a'];
// const arr = ['a',1, 1];

/**
  1,2,3,4,4,4,4,4,5,5,5,6,7,7,8,9
  0,0,0,0,1,2,3,4,4,5,5,6,6,6,7,7
 */

console.log(longestSubSeq(arr))