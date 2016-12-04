//http://www.geeksforgeeks.org/count-triplets-with-sum-smaller-that-a-given-value/


function countTripletSumsLessThan(start, end, currSum, sum, arr, totalCt) {

  if (end > 20) return;
  
  console.log(start, end, currSum)
    if (arr.length < 3) return 0;

    if ((end - start) < 2)
        return countTripletSumsLessThan(start, end+1, currSum+arr[end+1], sum, arr, totalCt);

 
      //console.log("sssss", sum, currSum)
    if (sum > currSum)  {
      ++totalCt;
      console.log("sds", totalCt)
    }

    if (end >= arr.length-1)
        return totalCt;    


    return countTripletSumsLessThan(start+1, end+1, currSum+arr[end+1] - arr[start], sum, arr, totalCt);
}


var arr = [1,4,2,5,8,23,1,3,34,2, 3, 4];
console.log(countTripletSumsLessThan(0, 1, arr[0] + arr[1], 12, arr, 0));