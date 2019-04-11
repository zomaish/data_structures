const printAllSubsetsBit = (set) => {
  const n = set.length;
  for(let i=0; i< (1<<n); i++) {
    const s = []
    for(let j=0; j<n; j++) {
      
      if ((i & (1<<j))) {
        s.push(set[j])
      }
    }
    console.log('s', s)
  }
};



const printAllSubsetsBT2 = (set) => {
  const n = set.length;
  
  let idx = 0

  console.log('perms ', 1<<n)
  for (let i=0; i< 1<<n; i++) {
      let res = []
      for (let j=i; j>0; j >>= 1) {
          if(j&1) {
              // console.log('-------- ', j)
              res.push(set[idx])
          }

          idx += 1;
      }
      console.log([...res])
      res = []
      idx = 0
  }
  
}

const printAllSubsetsBT = (arr) => {

  const res = [];
  const subset = [];
  printAllSubsetsBTUtil(arr, res, subset, 0)

  console.log(res)
  return res;

}

const printAllSubsetsBTUtil = (arr, res, subset, i) => {
  res.push([...subset])
  if (i === arr.length) return;

  for (let j=i; j<arr.length; j++) {
    subset.push(arr[j])
    printAllSubsetsBTUtil(arr, res, subset, j+1)
    subset.pop()
  }
}

const set = ['a', 'b', 'c']

printAllSubsetsBT(set)