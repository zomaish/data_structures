
// const extractMin = (q1, q2, q3) => {
//   const a = q1[0];
//   const b = q2[0];
//   const c = q3[0];

//   console.log('val', q1, q2, q3)
//   console.log('a,b,c', a,b,c)

//   const min = Math.min.apply(null, [a,b,c]);

//   let val;

//   if (min === a) {
//     return q1.shift();
//   } else if (min === b) {
//     return q2.shift();
//   }

//   return q3.shift();
// }

// const kthMultiple = (k) => {

//   if (k === 0) return 1;
//   if (k<0) return 0;

//   const q3 = [3];
//   const q5 = [5];
//   const q7 = [7];

//   let n = 1;
//   let val;

//   while(n < k) {
//     val = extractMin(q3, q5, q7);

//     //handle dups
//     console.log('val is ', val)
//     q3.push(3*val);
//     q5.push(5*val);
//     q7.push(7*val);

//     n+=1;
//   }

//   return val;
// };


const kthMultiple = (k) => {
  if (k <0) return 0;

  let val = 0;

  const q3 = [1];
  const q5 = [];
  const q7 = [];

  for (let i=0; i<=k; i++) {
    let v3 = q3.length ? q3[q3.length-1] : Number.MAX_VALUE;
    let v5 = q5.length ? q5[q5.length-1] : Number.MAX_VALUE;
    let v7 = q7.length ? q7[q7.length-1] : Number.MAX_VALUE;

    val = Math.min.apply(null, [v3, v5, v7]);

    if (val === v3) {
      q3.pop()
      q3.unshift(3*val);
      q5.unshift(5*val);
    } else if(val === v5) {
      q5.pop();
      q5.unshift(5*val);
    } else if (val === v7) {
      q7.pop();
    }

    q7.unshift(val*7)
  }

  return val;
}

console.log(kthMultiple(8))