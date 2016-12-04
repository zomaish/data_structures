var a = [1, 2, [3, [[[4, 5, [6, 7]]]]]]
var b = [1, 2, 3, 4, 5, 6, 7]

// Write a flatten function which takes a list/array and flattens out all the elements to one level

const isArr = function(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]"
}

const flatten = (arr, res) => {

  if (!Array.isArray(arr)) return res;
  
  arr.forEach((e) => {
     if (!Array.isArray(e)) res.push(e);
     else return flatten(e, res);
  });
  
  return res;
  
};



const flatten2 = (arr) => {
  if (!Array.isArray(arr)) return [];
  
  const q = [];
  const res = [];
  arr.forEach((e) => {
      q.push(e);
    
    while(q.length) {
      let elements = q.pop;
      
      if (Array.isArray(elements)) {
        elements.forEach((element) => {
          q.push(element)
        });
      } else {
      res.push(element);
      }
    
    }
  });
  
  return res;
};







console.log(flatten2(a))

