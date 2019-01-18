



const swap = (a, b) => {

  console.log('a', a, 'b', b)
  let x = a;
  let y = b;

  y = x^y;
  x = x^y;
  y = x^y;


  console.log('now x', x, 'y', y)
  

}



const a = 25;
const b = 43;


swap(a, b);