
/**
 * we can use an array or bitwise int
 * We can sort then loop O(n) total will be O(nLog(n)) 
 * We can loop n2
 */
const hasUniqueChars = (str) => {
  let checker = 0;
  const base = "a".charCodeAt();
  
  for (let i=0; i<str.length; i++) {
    let v = str.charCodeAt(i);
    
    if ((checker & (1<<v)) > 0) {
      return false;
    }
    
    checker |= (1<<v);
  }
  
  return true;
};

console.log(hasUniqueChars("abca"))