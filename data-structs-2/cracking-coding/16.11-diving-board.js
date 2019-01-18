



const divingBoard = (len) => {

  let res = [];
  for (let shorter=0; shorter<=len; shorter++) {
    const longer = len - shorter;
    res.push(shorter*lenShorter + longer*lenLonger)
  }
};


divingBoard(6)