//https://www.geeksforgeeks.org/minimum-number-jumps-reach-endset-2on-solution/





const numOfLeapsTogetToEnd = (arr) => {

  let steps = arr[0];
  const ladders = [];
  let i=0;
  let lastLadderPos = -1;
  let jumps = 1;
  while(steps>0 && i<arr.length) {

    if (i === arr.length-1) return jumps;

    steps--;
    i++;

    if (arr[i] === 0) continue;

    ladders.push(i);

    while(steps === 0 && i>lastLadderPos && ladders.length) {
      const newSteps = ladders.pop();
      if (newSteps + arr[newSteps] - i > 0) {
        steps += newSteps + arr[newSteps] - i;
      }
      jumps++; 
    }

    if (steps === 0)
      return jumps;
  }
}

const arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];

console.log(numOfLeapsTogetToEnd(arr))
