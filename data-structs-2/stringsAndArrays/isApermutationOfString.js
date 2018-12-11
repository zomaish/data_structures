


const hasPalindromMutation = (str) => {
  const n = str.length;
  let flags = 0;

  const base = 'a'.charCodeAt();

  for (let i=0; i<n; i++) {
    const flagVal = str.charCodeAt(i) - base + 1;
    
    if (!(flags & flagVal)) {
      flags |= flagVal; 
    } else {
      flags &= ~flagVal;
    }
  }

  const checkStr = flags.toString(2);

  let c = 0;

  while (flags) {
    c += flags & 1;
    flags >>= 1;
  }

  return c <2;

}


const str = 'tactcoa';
console.log(hasPalindromeMutation(str))