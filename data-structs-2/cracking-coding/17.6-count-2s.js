const count2sUtil = (num) => {
  let count = 0;
  while(num>0) {
    if (num%10 ===2) count +=1;
    num = parseInt(num/10);
  }

  return count;
}

const count2s = (n) => {
  let total2s = 0;
  for (let i=0; i<n; i++) {
    total2s += count2sUtil(i)
  }

  console.log(total2s);
}

count2s(30)
