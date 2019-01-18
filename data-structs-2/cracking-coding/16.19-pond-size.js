


const calcPondsSizes = (ponds) => {
  if (!isValidPondsMap(ponds))
    throw new Exception(`Invalid parameter pased to calcPondsSizes. Expected a matrix but recieved ${Object.prototype.toString.call(ponds)}`);

    const 
    const res = [];


  calcPondsSizes()
}


const ponds = [
  [0,2,1,0],
  [0,1,0,1],
  [1,1,0,1],
  [0,1,0,1]
];

calcPondsSizes(ponds);