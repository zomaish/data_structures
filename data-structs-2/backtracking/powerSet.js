const printAllSubsetsBit = (set) => {
  const n = set.length;
  for(let i=0; i< (1<<n); i++) {
    for(let j=0; j<n; j++) {
      
      if ((i & (1<<j))) {
        console.log(set[j])
      }
    }
  }
};



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
    console.log('b4 call', i, 'j', j , JSON.stringify(subset))
    printAllSubsetsBTUtil(arr, res, subset, j+1)
    subset.pop()
  }
}

const set = ['a', 'b', 'c']

printAllSubsetsBT(set)