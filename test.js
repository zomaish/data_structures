


let arr2 = ["one", "two", "three", "four", "five", "six", "seven"];
let arr1 = ["one", "two", "three", "one", "two", "three", "four", "five", "six", "seven"];




function getLps(arr) {

  let j = 0; 
  let i = 1;

  let lps = new Array(arr.length);

  lps[0] = 0;

  while (i < arr.length) {

    if (arr[i] === arr[j]) {
      lps[i++] = lps[j++] + 1;
    } else {
      if (j > 0) {
        j = lps[j - 1]
      } else {
        lps[i++] = 0;
      }
    }

  }

  return lps;
}

console.log(getLps(arr2))