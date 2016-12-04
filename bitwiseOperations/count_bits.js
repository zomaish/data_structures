let n = 5, count = 0;

console.log(n.toString(2).split(""))
while(n) {
  count += n&1;
  n>>=1;
}
console.log(count)
