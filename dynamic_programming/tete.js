function permute(arr){
    permuteHelper(arr, 0);
}

function permuteHelper(arr, index){
    if(index >= arr.length - 1){ //If we are at the last element - nothing left to permute
        console.log("[");
        for(let i = 0; i < arr.length - 1; i++){
            console.log(arr[i] + ", ");
        }
        if(arr.length > 0) 
            console.log(arr[arr.length - 1]);
        console.log("]");
        return;
    }

    for(let i = index; i < arr.length; i++){ //For each index in the sub array arr[index...end]

        //Swap the elements at indices index and i
        let t = arr[index];
        arr[index] = arr[i];
        arr[i] = t;

        //Recurse on the sub array arr[index+1...end]
        permuteHelper(arr, index+1);

        //Swap the elements back
        t = arr[index];
        arr[index] = arr[i];
        arr[i] = t;
    }
}

function getPartitionIndex(arr, s, e, t) {
  if (s > e) return -1;

  let m = (s+e)/2 | 0;
  
  if (arr[m] <= t && t < arr[m+1]) return m + 1;
  
  if (arr[m] > t) return getPartitionIndex(arr, s, m-1, t)
  else return getPartitionIndex(arr, m+1, e, t)
}




function printAlternateArr(a, b, al, ar, bl, br) {
  if (!a.length) return;

  for (let i=al, i<ar, i++) {
    let temp = [];
    printAllPairs(a, b, i, ar, bl, br, temp);
  }

  
  

  
}


function printAllPairs(a, b, al, ar, bl, br, tmep) {
    while(al<=ar && bl<=br) {
      let t = a[al];
      let pi = getPartitionIndex(b, bl, br, t);
     // printAlternateArrUtil(t, pi, br)

      tmep.concat([t, b[pi]]);
      printAllPairs(b, a, pi+1, br, al+1, ar, temp)
    }

    console.log(temp.join(" "));
  
}

function printAlternateArrUtil(t, pi, br) {
    for (let k=pi; k<br; k++)
     console.log(t, b[k]);
}







const arr1 = [10, 15, 25];
const arr2 = [5, 15, 20, 30];

printAlternateArr(arr1, arr2, 0, arr1.length-1, 0, arr2.length-1, []);





























