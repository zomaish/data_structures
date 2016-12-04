/**
1- In a build system, jobs have dependencies. 
We want to create a scchedule for the build system in which jobs are ordered based on their dependencies. A job should appear in the schedule when all dependent jobs are already scheduled.
{
  j1: [j2],
  j2: [j3, j4],
  j3: [j4]
  j4: []
}
**/

console.log(scheduler({
  j1: ["j2"],
  j2: ["j3", "j4"],
  j3: ["j4"],
  j4: []
}));

function scheduler(input) {
  const jobs = Object.keys(input);
  let job;
  let sc = [];
  
  for (let i=0; i<jobs.length; i++) {
    job = jobs[i];
    if (input[job].length === 0) {
      sc.push(job);
        jobs.splice(i, 1);
    }
  }
  
  return findepnedingJobs(input, jobs, sc);
}

function findepnedingJobs(input, jobs, sc) {
  if (!jobs.length) {
    return sc;
  }

  let subT;
  for (let i=0; i<jobs.length; i++) {
    subT = input[jobs[i]];
    if (subT.length <= sc.length) {
      if (allSubtasksComplete(subT, sc) === true) {
        sc.push(jobs[i]);
        jobs.splice(i, 1);
      }
    }
  }
  
  return findepnedingJobs(input, jobs, sc)
}

function allSubtasksComplete(subT, sc) {
  for (let j=0; j<subT.length; j++) {
    if (sc.indexOf(subT[j]) === -1) {
      return false;
    }
  }

  return true;
}
