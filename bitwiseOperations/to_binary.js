var x = ((12 >>> 0).toString(2)).split("").reverse();

console.log(x.length-1)
let sum = 0;
for (let i = 0; i< x.length; i++) {
  
  let n = x[i] >> 0;
  console.log(n, i)
  sum += n*Math.pow(2, i);
}
console.log("sum", sum)