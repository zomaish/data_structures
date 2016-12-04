

function sub(x, y) {

 
  while(y !== 0) {
    let c = ~x&y;
    x = x^y
    y =  c<< 1;
  }

  console.log(x)

}


sub(5, 4)