const kEmptySlots = function(flowers, k) {
  const days = new Array(flowers.length);
  
  for (let i=0; i<flowers.length; i++) {
      days[flowers[i] -1] = i+1;
  }

  console.log(days)
  
  let ans = Number.MAX_SAFE_INTEGER;
  let left =0; let right = k+1;
  while(right<days.length) {
      
    for (let i=left+1; i<right; i++) {
        if (days[i] < days[left] || days[i]<days[right]) {
            left = i;
            right = k+1+i;
            // continue
        } else {
          console.log('found ', left, right)
        }
    }

    ans = Math.min(ans, Math.max(days[left], days[right]));
    left = right;
    right = left + k + 1;

      
  }
  return ans
};

const flowers = [1,4,2,3];
// const flowers = [1,3,2];

console.log(kEmptySlots(flowers, 1))

