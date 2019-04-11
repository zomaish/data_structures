const findMissingTwoNums = (arr, n) => {
  // if (arr.length >= n-2) return;

  let xor = 0;

  for (let i=0; i<arr.length; i++) {
    xor ^= arr[i];
  }

  for (let i=1; i<=n; i++)
    xor ^= i;

    console.log("first XOR", xor);

  const rmb = xor & ~ (xor-1);

  console.log("rmb", rmb);

  let x = 0; y=0;
  for (let i=1; i<=n; i++) {
    if (i&rmb) {
      x ^=i
    } else {
      y ^=y
    }
  }

  console.log(x, y)

}


findMissingTwoNums([1,2,4,5,7], 7)