

const rand5 = () => Math.random() *6 |0;

const rand7 = () => {
  while(1) {
    const x = 5 * rand5() + rand5();
    if (x<21) return x%7
  }
}

const getVal = () => {
  const r = rand5();
  if (r === 3) return getVal();
  if (r<3) return 0;
  return 1;
};

const rand7Inc = () => {

  let res = 0, n=0;

  while(res === 0) {
    for (let i=0; i<3; i++) {
      const r = rand5();

      res = (res << 1) + getVal()
    }
  }

  return res;
}


for (let i=0; i<200; i++) {
// console.log('rand7', rand7());
console.log('rand7Inc', rand7Inc());
}
