const taskScheduler = (tasks, ticks) => {
  const taskCount = new Map();

  tasks.forEach((t) => {
    if(taskCount.has(t)) {
      taskCount.set(t, [taskCount.get(t)[0]+1, 0])
    } else {
      taskCount.set(t, [1, 0]);
    }
  });

  const sortedTasks = [...taskCount.entries()].sort((a, b) => {
    console.log("comparing ", a[1], b[1],  a[1] > b[1])
    if (a[1][0] > b[1][0]) return -1;
    if (a[1][0] < b[1][0]) return 1;
    return 0;
  });


  const res = [];
  let currTick = 0;

  console.log("sortedTasks", [...sortedTasks])
  while(sortedTasks.length) {    
    const task = sortedTasks[0];
    if (task[1][1] > currTick) {
      currTick ++;
      res.push("idle")
      continue;
    }

    sortedTasks.shift();

    res.push(task[0]);
    task[1][0] -=1;
    task[1][1] = n+currTick;

    if (task[1][0] > 0)
      sortedTasks.push(task);
    currTick++;

    sortedTasks.sort((a, b) => {
      const itemA = a[1];
      const itemB = b[1]
      if (itemA[1]>=currTick) return 1;
      if (itemB[1]>=currTick) return 1;

      if (itemA[0] > itemB[0]) return -1;
      if (itemA[0] < itemB[0]) return 1;
      return 0
    });
  }


  console.log(res.join("->"))

};


const tasks = ["C", "C", "A","A","A","A","A","B","B","B"], n = 3


console.log(taskScheduler(tasks, n))
