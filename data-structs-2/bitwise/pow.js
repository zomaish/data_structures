


const pow = (num, e) => {

}



pow(9,3)



const arr = [1,2,3,4,5,0,6,234,56,5,34,23,1,346];


const hasZero = (a, i) => {

  if (i>=a.length) return false;
  if (a[i] !== 0) 
    return hasZero(a, i+1);

  return true;
}