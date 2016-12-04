const towersOfHanoi = (n, source, dest, buf) => {
  if (n=== 1) {
    console.log('Moved disk 1 from ', source, dest);
    return;
  }

  towersOfHanoi(n-1, source, buf, dest);
  console.log('moved ', n, 'from ', source, ' to ', dest);
  towersOfHanoi(n-1, buf, dest, source);
}
towersOfHanoi(2, 'a', 'c', 'b')


// Moved disk 1 from  a b
// moved  2 from  a  to  c  using  b
// Moved disk 1 from  b c