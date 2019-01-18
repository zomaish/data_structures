const get_max_profit = (prices) => {

  let profit = 0;
  let minIdx = maxIdx = 0;
  
  for (let i=1; i<prices.length; i++) {
    if (prices[i] < prices[minIdx]) {
      minIdx = i;
    } else {
      maxIdx = i
    }

    if (minIdx < maxIdx) {
      profit = Math.max(profit, prices[maxIdx] - prices[minIdx]);
    }
  }

  return profit;
};

// const stock_prices = [10, 7, 5, 8, 11, 9]
const stock_prices = [4,2,3,1]

console.log(get_max_profit(stock_prices))