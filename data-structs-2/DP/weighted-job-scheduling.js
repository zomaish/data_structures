const scheduleMostTasks = (tasks) => {
  tasks.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1]>b[1]) return 1;
      if(a[1]<b[1]) return -1;
      return 0;
    }

    if (a[0]>b[0]) return 1;
    return -1;
  });


  console.log(tasks)

  const dp = Array.apply(null, Array(tasks.length)).map((e, idx) => tasks[idx][2]);

  dp[0] = tasks[0][2];

  for (let i=1; i<tasks.length; i++) {
    const task = tasks[i];

    for (let j=0; j<i; j++) {
      if (task[0]>=tasks[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + task[2]);
      }
    }
  }

  console.log('dp', dp)
  return Math.max.apply(null, dp)
};

const tasks = [[4,6,5], [1,3,5], [2,5,6], [6,7,4], [7,9,2], [5,8,11]];

console.log('max is ', scheduleMostTasks(tasks));




