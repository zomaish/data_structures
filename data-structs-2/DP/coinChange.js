


const changeCoinsRecUtil = (coins, amt, idx, ways) => {
    let w = ways
    if (amt === 0) return 1;
    if(amt < 0 || idx >= coins.length) return 0;

    const coin  = coins[idx];
    const rem = amt - coin;

    console.log('w',ways, 'amt', amt, 'rem', rem, 'idx', idx)

    w += changeCoinsRecUtil(coins, rem, idx++, w) + changeCoinsRecUtil(coins, amt, idx++, w);
    return w;
}


const changeCoinsRec = (coins, amt) => {
    return changeCoinsRecUtil(coins, amt, 0, 0)
}

const coins = [1,2,3];

 console.log('ans', changeCoinsRec(coins, 4))

const coinChange = (coins, amt) => {
	const len = coins.length;
	const dp = Array.apply(null, Array(amt+1)).map(Number.prototype.valueOf, 0);
	dp[0] = 1;


	/**
	 * 1- Once a coin can get to 0, it means that we can use it at that amount
	 * 2- Once a coin can combine with a remainder that was set (can get to zero), then we can add the number of times  
	 */
	for(i=0; i<len; i++) {
		const coin = coins[i];
		for (let j=coin; j<=amt; j++) {
			const rem = j-coin;
			dp[j] += dp[rem]
		}
	}

	console.log(dp[amt])
}

const arr = [25, 10]

//coinChange(arr, 50)