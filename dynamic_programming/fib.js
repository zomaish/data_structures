//exponential

let memo = {};
function fib(n) {
  if (memo[n]) return memo[n]
  let f = n <= 2 ? 1 : fib(n-1) + fib(n-2);
  memo[n] = f;

  return f;
}


function fib(n) {

  const f = new Array(n+1);
  
  f[0] = 0; f[1] = 1;
  
  for(let i=2; i<=n; i++) {
    f[i] = f[i-1] + f[i-2]; 
  }
  
  return f[n];
}

console.log(fib(9))


  // Base cases
    if (n == 0)
        return 0;
    if (n == 1 || n == 2)
        return (f[n] = 1);
 
    // If fib(n) is already computed
    if (f[n])
        return f[n];
 
    int k = (n & 1)? (n+1)/2 : n/2;
 
    // Applyting above formula [Note value n&1 is 1
    // if n is odd, else 0.
    f[n] = (n & 1)? (fib(k)*fib(k) + fib(k-1)*fib(k-1))
           : (2*fib(k-1) + fib(k))*fib(k);