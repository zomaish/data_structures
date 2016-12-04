function canRepresentBST(arr) {

  let root = Number.MIN_VALUE;
  const s = [];

  for (let i = 0; i<arr.length; i++) {
    if (arr[i]<root)
      return false;

    while(s.length && s[s.length-1]<arr[i]) {
      root = s.pop();
    }

    s.push(arr[i]);
  }

  return true;
}


const pre1 = [40, 30, 35, 80, 100];
console.log(canRepresentBST(pre1));
const pre2 = [40, 30, 35, 20, 80, 100];
console.log(canRepresentBST(pre2));
