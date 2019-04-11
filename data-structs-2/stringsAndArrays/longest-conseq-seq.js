const longestConsequtiveSubSeq = (arr) => {

  const map = new Map();

  arr.forEach((e, i) => {
    map.set(arr[i], true);
  });

  let maxSeq = 0;
  for (let i=0; i<arr.length; i++) {
    if (!map.has(arr[i]-1)) {
      let num = arr[i];

      let currSeq = 1;
      while(map.has(num+1)) {
        currSeq +=1;
        num+=1;
      }

      maxSeq = Math.max(maxSeq, currSeq);
    }
  }

  console.log(maxSeq);
};


const seq = [101, 102, 100, 4, 200, 1, 103, 104, 3, 2, 105];

longestConsequtiveSubSeq(seq);
