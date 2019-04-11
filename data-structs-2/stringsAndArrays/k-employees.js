class Worker {
  constructor(q, w) {
    this.q = q;
    this.w = w;
  }

  ratio() {
    return this.w/this.q;
  }
}

const minCost = (quality, wage, k) => {

  let sumq = 0;
  let ans = Number.MAX_SAFE_INTEGER;
  
  const workers = Array.apply(null, Array(quality.length)).map((e, idx) => new Worker(quality[idx], wage[idx]));
  workers.sort((a, b) => {
    const ratioA = a.ratio();
    const ratioB = b.ratio();
    if (ratioA>ratioB) return 1;
    if (ratioB>ratioA) return -1;
    return 0;
  });

  let j=0;
  let count = 0;
  console.log(workers);
   
  for (let i=0; i<workers.length; i++) {
    const WorkerRatio = workers[i].ratio()
    sumq += workers[i].q;
    count++;

    console.log('sumq and i', sumq, i)
    if (count > k) {
      sumq -= workers[j].q;
      count--;
    }

    if (count === k) {
      console.log('calc min', ans, WorkerRatio, sumq, WorkerRatio*sumq)
      ans = Math.min(ans, WorkerRatio*sumq);
    }
  }
 
  console.log(ans);
}



const quality = [10,20,5], wage = [70,50,30], K = 2

minCost(quality, wage, K);
