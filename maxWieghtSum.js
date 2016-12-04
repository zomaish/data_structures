
BottomUp
function knapsack(val, wt, W) {
  let K = {};
  
  for(let m=0; m <= val.length; m++){
    K[m] = {};
  }
  
  for(let i=0; i <= val.length; i++){
    for(let j=0; j <= W; j++){
      if(i == 0 || j == 0){
        K[i][j] = 0;
        continue;
      }

      if(j - wt[i-1] >= 0){
        K[i][j] = Math.max(K[i-1][j], K[i-1][j-wt[i-1]] + val[i-1]);
      }else{
        K[i][j] = K[i-1][j];
      }
    }
  }
  return K[val.length][W];
}


console.log(knapsack([60, 100, 120], [10, 20, 30], 50))




//top down
function maxValue(v, w, t) {
  return maxValueRecursive(v, w, t, v.length, 0, {});
}

function maxValueRecursive(v, w, remainingWeight, totalItems, currentItem, map) {
  //if currentItem exceeds total item count or remainingWeight is less than 0 then
  //just return with 0;
  if(currentItem >= totalItems || remainingWeight <= 0) {
    return 0;
  }

  //fom a key based on remainingWeight and remainingCount

  const ri = totalItems - currentItem -1;
  const rw = remainingWeight;
  const k = ri +"_"+ rw;
  
  //see if key exists in map. If so then return the maximumValue for key stored in map.
  if(map[k]) {
    return map[k];
  }
  let maxValue;
  //if weight of item is more than remainingWeight then try next item by skipping current item
  if(remainingWeight < w[currentItem]) {
    maxValue = maxValueRecursive(v, w, remainingWeight, totalItems, currentItem + 1, map);
  } else {
    //try to get maximumValue of either by picking the currentItem or not picking currentItem
    maxValue = Math.max(
      v[currentItem] + maxValueRecursive(v, w, remainingWeight - w[currentItem], totalItems, currentItem + 1, map),
                        maxValueRecursive(v, w, remainingWeight, totalItems, currentItem + 1, map));
  }
  //memoize the key with maxValue found to avoid recalculation
  map[k] = maxValue;
  return maxValue;
}


const val = [22, 20, 15, 30, 24, 54, 21, 32, 18, 25];
const wt = [4, 2, 3, 5, 5, 6, 9, 7, 8, 10];
console.log(maxValue(val, wt, 30));



