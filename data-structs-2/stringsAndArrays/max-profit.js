const get_max_profit = (prices) => {

  
  let i=minIdx=maxIdx=0;
  const n = prices.length;

  while(i<(n-1)) {

    while(i<(n-1) && prices[i+1] < prices[i])
      i++;

    if (i===n-1) return 0;

    minIdx = i;

    i+=1;
    while(i<(n-1) && prices[i+1] > prices[i])
    i++

    maxIdx  = i;

    diff = prices[maxIdx] - prices[minIdx];



  }




};

// const stock_prices = [10, 7, 5, 8, 3, 11, 9, 12]
const stock_prices = [4,2,3,1];

console.log(get_max_profit(stock_prices))