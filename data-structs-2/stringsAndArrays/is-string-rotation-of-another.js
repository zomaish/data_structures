
//short version + extra space

const isRotation = (s1, s2) => {
  return (s1 + s1).indexOf(s2) > -1;
};


//long version no extra space
const isSubString = (s1, s2) => {
  let loop = 0, i=0, j=0;

  if (s1 === s2 || s1.length !== s2.length) return false;

  while(true) {
    if (j===s2.length) {
      return true
    }

    if (i=== s1.length) {
      i = 0;
      loop +=1;

      console.log('loop is ', loop)
      if (loop>1) return false;
    }

    console.log('j', j, 'i', i, 's1', s1[i], 's2', s2[j])
    if (s1[i] === s2[j]) {
      j +=1;
      i +=1;
    } else if (j>0) {
      j=0; 
    } else {
      i +=1;
    }
  }
}


const s1 = "watererbottel";
const s2 = "erbottelwater";


console.log(s1, '=====' , s2)
console.log(isSubString(s1,s2))