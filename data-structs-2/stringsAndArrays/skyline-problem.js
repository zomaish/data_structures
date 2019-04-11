

const sortFn = (a, b) => {
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  return 0
};

const skyline = (arr) => {

  const coordinates = [];
  const q = [0];
  const res = [];
  arr.forEach(a => {
    coordinates.push([a[0], a[2], true], [a[1], a[2], false])
  });

  coordinates.sort(sortFn);

  let prevMaxHeight = 0;
  let maxHeight = 0;

  coordinates.forEach(p => {
    const pos = q.indexOf(p[1]);

    if (pos === -1) {
      q.push(p[1])
    }

    if (p[2] == false) {
      if (pos !== -1) {
        q.splice(pos, 1)
      }
    }

    maxHeight = Math.max.apply(null, q);

    if (maxHeight !== prevMaxHeight) {
      res.push([p[0], maxHeight])
      prevMaxHeight = maxHeight;
    }
  })



  console.log(res)

}


const arr = [ [2,9,10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8] ];
/**
 [ [ 2, 10, true ],
  [ 3, 15, true ],
  [ 5, 12, true ],
  [ 7, 15, false ],
  [ 9, 10, false ],
  [ 12, 12, false ],
  [ 15, 10, true ],
  [ 19, 8, true ],
  [ 20, 10, false ],
  [ 24, 8, false ] ]
 */
//[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ].


console.log(skyline(arr))