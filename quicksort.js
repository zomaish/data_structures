
(1) O(n lg n)

var qsort = function(a) {
  if (a.length <= 1) { return a; }
  var pivot = a[0];
  var tail = a.slice(1);
  return Array.prototype.concat.call(
      qsort(tail.filter(function(e) { return e <= pivot; })),
      pivot,
      qsort(tail.filter(function(e) { return e > pivot; })));
};



(2) O(n lg n)

function quicksort(data) {
    if (data.length == 0) return [];
  
    var left = [], right = [], pivot = data[0];
  
    for (var i = 1; i < data.length; i++) {
        if(data[i] < pivot)
            left.push(data[i])
        else
            right.push(data[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));

}


(3) O(n lg n)

function partition(arr, low, high)
    {
        let pivot = arr[high]; 
        let i = (low-1); // index of smaller element
        for (let j=low; j<=high-1; j++) {
            // If current element is smaller than or
            // equal to pivot
            if (arr[j] <= pivot) {
                i++;
 
                // swap arr[i] and arr[j]
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
 
        // swap arr[i+1] and arr[high] (or pivot)
        let temp = arr[i+1];
        arr[i+1] = arr[high];
        arr[high] = temp;
 
        return i+1;
    }
 
 
    /* The main function that implements QuickSort()
      arr[] --> Array to be sorted,
      low  --> Starting index,
      high  --> Ending index */
    void sort(arr, low, high)
    {
        if (low < high)
        {
            /* pi is partitioning index, arr[pi] is 
              now at right place */
            let pi = partition(arr, low, high);
 
            // Recursively sort elements before
            // partition and after partition
            sort(arr, low, pi-1);
            sort(arr, pi+1, high);
        }
    }