

const hasTwo = (n) => {
  let c = n;
  let i =0;
  while(c) {
    if (i>0)
      c = c/(i*10) | 0;
     
    if ((c % 10) === 2) return true;

    i +=1;
  }

  return false;
}

const countTwos = (l, r) => {

  const res = [];
  for (let i=l; i<=r; i++) {
    if (i>=2) {
      if(hasTwo(i)) {
        res.push(i)
      }
    }
  }

  return res
}



console.log(countTwos(0, 30))



//2 12 20 21 22, 23, 